import { Injectable } from '@angular/core';

export type UserRole = 'student' | 'teacher' | 'parent';

export interface WizardStep {
  label: string;
  field: string;
  type: 'text' | 'select' | 'multiselect' | 'quiz';
  required?: boolean;
  options?: string[];
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  getStepsForRole(role: UserRole): WizardStep[] {
    switch (role) {
      case 'student':
        return [
          { label: 'Ad Soyad', field: 'fullName', type: 'text', required: true, message: 'Merhaba! Önce adını ve soyadını yazar mısın?' },
          { label: 'Okul', field: 'school', type: 'text', required: true, message: 'Hangi okulda okuyorsun? Yaz bakalım.' },
          { label: 'Sınıf', field: 'class', type: 'text', required: true, message: 'Kaçıncı sınıftasın? 😊' },
          { label: 'Okul Numarası', field: 'schoolNumber', type: 'text', message: 'Okul numaranı da ekleyelim mi?' },
          { label: 'En Sevdiğin Ders', field: 'favoriteSubject', type: 'select', options: ['Matematik', 'Fen', 'Türkçe', 'İngilizce'], required: true, message: 'En çok hangi dersi seviyorsun? 👀' },
          { label: 'Hobilerin', field: 'hobbies', type: 'multiselect', options: ['Resim', 'Müzik', 'Oyun', 'Kitap'], required: false, message: 'Boş zamanlarında neler yapmayı seversin?' },
          { label: 'Büyüyünce Ne Olmak İstiyorsun?', field: 'futureDream', type: 'text', message: 'Hayalindeki meslek nedir? ✨' },
          { label: 'Mini Test: 3 + 5 = ?', field: 'quiz1', type: 'quiz', options: ['6', '7', '8', '9'], message: 'Hadi bakalım! 3 + 5 kaç eder? 🧠' },
          { label: 'Mini Test: Türkiye\'nin başkenti?', field: 'quiz2', type: 'quiz', options: ['İstanbul', 'Ankara', 'İzmir', 'Bursa'], message: 'Türkiye\'nin başkenti neresi biliyor musun? 🇹🇷' },
          { label: 'E-posta Adresi', field: 'email', type: 'text', required: true, message: 'Giriş için e-posta adresini gir lütfen ✉️' },
          { label: 'Şifre Belirle', field: 'password', type: 'text', required: true, message: 'Bir şifre oluştur. En az 6 karakter olsun 🔐' },
        ];

      case 'teacher':
        return [
          { label: 'Ad Soyad', field: 'fullName', type: 'text', required: true, message: 'Merhaba öğretmenim, adınızı ve soyadınızı giriniz.' },
          { label: 'Branşınız', field: 'branch', type: 'select', options: ['Matematik', 'Fen', 'Türkçe', 'Sosyal'], required: true, message: 'Hangi branşta ders veriyorsunuz?' },
          { label: 'Okulunuz', field: 'school', type: 'text', message: 'Görev yaptığınız okulun adını yazar mısınız?' },
          { label: 'Kaç sınıf okutuyorsunuz?', field: 'classCount', type: 'text', message: 'Kaç farklı sınıfla çalışıyorsunuz?' },
          { label: 'Deneyim Yılı', field: 'experience', type: 'text', message: 'Kaç yıllık öğretmensiniz?' },
          { label: 'Ders Dili', field: 'language', type: 'select', options: ['Türkçe', 'İngilizce'], required: true, message: 'Dersleri hangi dilde veriyorsunuz?' },
          { label: 'E-posta Adresi', field: 'email', type: 'text', required: true, message: 'Giriş için e-posta adresini gir lütfen ✉️' },
          { label: 'Şifre Belirle', field: 'password', type: 'text', required: true, message: 'Bir şifre oluştur. En az 6 karakter olsun 🔐' },
        ];

      case 'parent':
        return [
          { label: 'Ad Soyad', field: 'fullName', type: 'text', required: true, message: 'Merhaba! Lütfen adınızı ve soyadınızı yazınız.' },
          { label: 'Çocuk Sayısı', field: 'childrenCount', type: 'text', message: 'Kaç çocuğunuzu takip etmek istiyorsunuz?' },
          { label: 'Takip Etmek İstediğiniz Öğrenciler', field: 'studentNames', type: 'multiselect', options: [], message: 'İsimlerini bildiğiniz çocukları buradan seçebilirsiniz.' },
          { label: 'İletişim Tercihiniz', field: 'contactPreference', type: 'select', options: ['E-posta', 'SMS'], required: false, message: 'Size nasıl ulaşmamızı istersiniz?' },
          { label: 'E-posta Adresi', field: 'email', type: 'text', required: true, message: 'Giriş için e-posta adresini gir lütfen ✉️' },
          { label: 'Şifre Belirle', field: 'password', type: 'text', required: true, message: 'Bir şifre oluştur. En az 6 karakter olsun 🔐' },
        ];

      default:
        return [];
    }
  }
}
