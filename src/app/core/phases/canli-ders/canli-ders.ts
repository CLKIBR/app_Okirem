import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanliDersService } from './canli-ders.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-canli-ders',
  templateUrl: './canli-ders.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CanliDers {
  @ViewChild('localVideo', { static: false }) localVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo', { static: false }) remoteVideoRef!: ElementRef<HTMLVideoElement>;
  yeniKatilimci = '';
  katilimcilar: string[] = [];

  localStream: MediaStream | null = null;
  kullaniciAdi: string = '';
  karsiKullaniciAdi: string = '';
  remoteStream: MediaStream | null = null;
  peerConnection: RTCPeerConnection | null = null;
  signalingSocket: WebSocket | null = null;
  isCaller = false;

  constructor(private canliDersService: CanliDersService) {}

  startLocalStream() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      this.localStream = stream;
      if (this.localVideoRef && this.localVideoRef.nativeElement) {
        this.localVideoRef.nativeElement.srcObject = stream;
      }
    });
  }

  async startCall() {
    if (!this.kullaniciAdi) {
      alert('Lütfen adınızı girin.');
      return;
    }
    this.initSignaling();
    // Peer bağlantısı ve offer/answer mantığı optimize edildi
    if (!this.peerConnection) {
      this.peerConnection = new RTCPeerConnection();
      if (this.localStream) {
        this.localStream.getTracks().forEach(track => {
          this.peerConnection!.addTrack(track, this.localStream!);
        });
      }
      this.remoteStream = new MediaStream();
      if (this.remoteVideoRef && this.remoteVideoRef.nativeElement) {
        this.remoteVideoRef.nativeElement.srcObject = this.remoteStream;
      }
      this.peerConnection.ontrack = (event) => {
        // Her iki tarafın videosu doğru şekilde remoteVideo'ya aktarılır
        if (event.streams && event.streams[0]) {
          this.remoteStream = event.streams[0];
          if (this.remoteVideoRef && this.remoteVideoRef.nativeElement) {
            this.remoteVideoRef.nativeElement.srcObject = this.remoteStream;
          }
        }
      };
      this.peerConnection.onicecandidate = (event) => {
        if (event.candidate && this.signalingSocket) {
          if (this.signalingSocket.readyState === WebSocket.OPEN) {
            this.signalingSocket.send(JSON.stringify({ type: 'candidate', candidate: event.candidate, ad: this.kullaniciAdi }));
          } else {
            this.signalingSocket.addEventListener('open', () => {
              this.signalingSocket!.send(JSON.stringify({ type: 'candidate', candidate: event.candidate, ad: this.kullaniciAdi }));
            }, { once: true });
          }
        }
      };
    }
    // Sadece ilk başlatan offer gönderir, diğer taraf answer ile yanıtlar
    if (!this.isCaller) {
      this.isCaller = true;
      const offer = await this.peerConnection.createOffer();
      await this.peerConnection.setLocalDescription(offer);
      if (this.signalingSocket) {
        if (this.signalingSocket.readyState === WebSocket.OPEN) {
          this.signalingSocket.send(JSON.stringify({ type: 'offer', offer, ad: this.kullaniciAdi }));
        } else {
          this.signalingSocket.addEventListener('open', () => {
            this.signalingSocket!.send(JSON.stringify({ type: 'offer', offer, ad: this.kullaniciAdi }));
          }, { once: true });
        }
      }
    }
  }

  hangUp() {
    if (this.peerConnection) {
      this.peerConnection.close();
      this.peerConnection = null;
      this.remoteStream = null;
      if (this.remoteVideoRef && this.remoteVideoRef.nativeElement) {
        this.remoteVideoRef.nativeElement.srcObject = null;
      }
    }
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
      this.localStream = null;
      if (this.localVideoRef && this.localVideoRef.nativeElement) {
        this.localVideoRef.nativeElement.srcObject = null;
      }
    }
    if (this.signalingSocket) {
      this.signalingSocket.close();
      this.signalingSocket = null;
    }
    this.karsiKullaniciAdi = '';
  }

  initSignaling() {
    if (this.signalingSocket) return;
    this.signalingSocket = new WebSocket('ws://localhost:3001');
    this.signalingSocket.onopen = () => {
      console.log('WebSocket bağlantısı açıldı');
    };
    this.signalingSocket.onerror = (err) => {
      console.error('WebSocket bağlantı hatası:', err);
    };
    this.signalingSocket.onmessage = async (msg) => {
      let jsonString;
      if (msg.data instanceof Blob) {
        jsonString = await msg.data.text();
      } else {
        jsonString = msg.data;
      }
      console.log('WebSocket mesajı alındı:', jsonString);
      const data = JSON.parse(jsonString);
      if (!this.peerConnection) {
        this.peerConnection = new RTCPeerConnection();
        console.log('PeerConnection oluşturuldu');
        if (this.localStream) {
          this.localStream.getTracks().forEach(track => {
            this.peerConnection!.addTrack(track, this.localStream!);
          });
        }
        this.remoteStream = new MediaStream();
        if (this.remoteVideoRef && this.remoteVideoRef.nativeElement) {
          this.remoteVideoRef.nativeElement.srcObject = this.remoteStream;
        }
        this.peerConnection.ontrack = (event) => {
          console.log('Track event:', event);
          if (event.streams && event.streams[0]) {
            this.remoteStream = event.streams[0];
            if (this.remoteVideoRef && this.remoteVideoRef.nativeElement) {
              this.remoteVideoRef.nativeElement.srcObject = this.remoteStream;
            }
          }
        };
        this.peerConnection.onicecandidate = (event) => {
          console.log('ICE candidate:', event.candidate);
          if (event.candidate && this.signalingSocket) {
            this.signalingSocket.send(JSON.stringify({ type: 'candidate', candidate: event.candidate, ad: this.kullaniciAdi }));
          }
        };
      }
      if (data.ad && data.ad !== this.kullaniciAdi) {
        this.karsiKullaniciAdi = data.ad;
      } else if (data.ad && data.ad === this.kullaniciAdi && data.type === 'answer') {
        // Karşı tarafın adını answer mesajında da güncelle
        if (data.karsiAd) {
          this.karsiKullaniciAdi = data.karsiAd;
        }
      }
      if (data.type === 'offer' && !this.isCaller) {
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
        const answer = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(answer);
        if (this.signalingSocket) {
          if (this.signalingSocket.readyState === WebSocket.OPEN) {
            this.signalingSocket.send(JSON.stringify({ type: 'answer', answer, ad: this.kullaniciAdi, karsiAd: data.ad }));
          } else {
            this.signalingSocket.addEventListener('open', () => {
              this.signalingSocket!.send(JSON.stringify({ type: 'answer', answer, ad: this.kullaniciAdi, karsiAd: data.ad }));
            }, { once: true });
          }
        }
      } else if (data.type === 'answer' && this.isCaller) {
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
        if (data.karsiAd) {
          this.karsiKullaniciAdi = data.karsiAd;
        } else if (data.ad && data.ad !== this.kullaniciAdi) {
          this.karsiKullaniciAdi = data.ad;
        }
      } else if (data.type === 'candidate') {
        try {
          await this.peerConnection.addIceCandidate(data.candidate);
        } catch (e) {}
      }
    };
  }

  baslat() {
    this.canliDersService.baslat('Demo Ders');
    this.guncelleKatilimcilar();
  }

  bitir() {
    this.canliDersService.bitir();
    this.guncelleKatilimcilar();
  }

  entegrasyonTest() {
    this.canliDersService.entegrasyonTest();
  }

  katilimciEkle() {
    if (this.yeniKatilimci.trim()) {
      this.canliDersService.katilimciEkle(this.yeniKatilimci.trim());
      this.guncelleKatilimcilar();
    }
  }

  katilimciCikar() {
    if (this.yeniKatilimci.trim()) {
      this.canliDersService.katilimciCikar(this.yeniKatilimci.trim());
      this.guncelleKatilimcilar();
    }
  }

  guncelleKatilimcilar() {
    this.katilimcilar = this.canliDersService.getKatilimcilar();
  }
}