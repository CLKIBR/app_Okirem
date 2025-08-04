import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CanliDersService {
  private dersAktif = false;
  private katilimcilar: string[] = [];

  baslat(dersAdi: string): void {
    this.dersAktif = true;
    console.log(`Canlı ders başlatıldı: ${dersAdi}`);
  }

  bitir(): void {
    this.dersAktif = false;
    this.katilimcilar = [];
    console.log('Canlı ders sonlandırıldı.');
  }

  katilimciEkle(ad: string): void {
    if (!this.katilimcilar.includes(ad)) {
      this.katilimcilar.push(ad);
      console.log(`${ad} derse katıldı.`);
    }
  }

  katilimciCikar(ad: string): void {
    this.katilimcilar = this.katilimcilar.filter(k => k !== ad);
    console.log(`${ad} dersten ayrıldı.`);
  }

  getKatilimcilar(): string[] {
    return [...this.katilimcilar];
  }

  entegrasyonTest(): void {
    // Örnek: Video konferans API entegrasyonu burada başlatılır
    console.log('Video konferans entegrasyonu başlatıldı.');
  }
}
