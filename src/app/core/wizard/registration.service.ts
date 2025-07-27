import { Injectable } from '@angular/core';
export type UserRole = 'student' | 'teacher' | 'parent';

export interface WizardStep {
  label: string;
  field: string;
  type: 'text' | 'select' | 'multiselect' | 'quiz';
  required?: boolean;
  options?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  getStepsForRole(role: UserRole): WizardStep[] {
    switch (role) {
      case 'student':
        return [
          { label: 'Ad Soyad', field: 'fullName', type: 'text', required: true },
          { label: 'Okul', field: 'school', type: 'text', required: true },
          { label: 'Sınıf', field: 'class', type: 'text', required: true },
          { label: 'Okul Numarası', field: 'schoolNumber', type: 'text' },
          { label: 'En Sevdiğin Ders', field: 'favoriteSubject', type: 'select', options: ['Matematik', 'Fen', 'Türkçe', 'İngilizce'], required: true },
          { label: 'Hobilerin', field: 'hobbies', type: 'multiselect', options: ['Resim', 'Müzik', 'Oyun', 'Kitap'], required: false },
          { label: 'Büyüyünce Ne Olmak İstiyorsun?', field: 'futureDream', type: 'text' },
          { label: 'Mini Test: 3 + 5 = ?', field: 'quiz1', type: 'quiz', options: ['6', '7', '8', '9'] },
          { label: 'Mini Test: Türkiye\'nin başkenti?', field: 'quiz2', type: 'quiz', options: ['İstanbul', 'Ankara', 'İzmir', 'Bursa'] },
        ];

      case 'teacher':
        return [
          { label: 'Ad Soyad', field: 'fullName', type: 'text', required: true },
          { label: 'Branşınız', field: 'branch', type: 'select', options: ['Matematik', 'Fen', 'Türkçe', 'Sosyal'], required: true },
          { label: 'Okulunuz', field: 'school', type: 'text' },
          { label: 'Kaç sınıf okutuyorsunuz?', field: 'classCount', type: 'text' },
          { label: 'Deneyim Yılı', field: 'experience', type: 'text' },
          { label: 'Ders Dili', field: 'language', type: 'select', options: ['Türkçe', 'İngilizce'], required: true },
        ];

      case 'parent':
        return [
          { label: 'Ad Soyad', field: 'fullName', type: 'text', required: true },
          { label: 'Çocuk Sayısı', field: 'childrenCount', type: 'text' },
          { label: 'Takip Etmek İstediğiniz Öğrenciler', field: 'studentNames', type: 'multiselect', options: [] },
          { label: 'İletişim Tercihiniz', field: 'contactPreference', type: 'select', options: ['E-posta', 'SMS'], required: false },
        ];

      default:
        return [];
    }
  }
}
