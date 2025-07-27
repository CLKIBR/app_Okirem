import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbar } from '../../../../shared/home-navbar/home-navbar';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LessonService } from '../../../../core/services/lesson.service';
import 'iconify-icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeNavbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home implements OnInit {
  goToLogin() {
    this.router.navigate(['/login']);
  }
  router = inject(Router);
  lessonService = inject(LessonService);
  lessonCards: (any & { id: string })[] = [];

  ngOnInit() {
    // Firebase'den dersleri yüklemek için:
    this.lessonService.getLessons().subscribe(lessons => {
      console.log('Firebase lessons:', lessons);
      if (lessons && lessons.length > 0) {
        this.lessonCards = lessons;
      } else {
        // Eğer Firebase'de veri yoksa, örnek veriler göster
        this.lessonCards = [
          {
            id: 'temp-1',
            title: 'Matematik',
            date: '2025.07.26',
            duration: 45,
            icon: 'mdi:math-compass',
            gradient: 'from-indigo-500 via-blue-500 to-cyan-400'
          },
          {
            id: 'temp-2',
            title: 'Türkçe',
            date: '2025.07.26',
            duration: 30,
            icon: 'mdi:book-variant',
            gradient: 'from-pink-400 via-rose-500 to-red-400'
          },
          {
            id: 'temp-3',
            title: 'Fen Bilimleri',
            date: '2025.07.26',
            duration: 40,
            icon: 'mdi:atom-variant',
            gradient: 'from-green-400 via-teal-500 to-lime-400'
          }
        ];
      }
    });
  }

  login(event?: Event) {
    if (event) event.preventDefault();
    this.router.navigate(['/register/wolcome']);
  }

  goToSignup() {
    console.log('Signup button clicked');
    // Kayıt sayfasına yönlendirme eklenebilir
  }

  getIconColor(gradient: string): string {
    if (gradient.includes('indigo')) return '#6366f1';
    if (gradient.includes('pink') || gradient.includes('rose')) return '#ec4899';
    if (gradient.includes('green') || gradient.includes('teal') || gradient.includes('emerald') || gradient.includes('lime')) return '#22c55e';
    if (gradient.includes('yellow') || gradient.includes('amber') || gradient.includes('orange')) return '#f59e42';
    if (gradient.includes('blue') || gradient.includes('sky') || gradient.includes('cyan') || gradient.includes('purple')) return '#3b82f6';
    return '#6366f1';
  }
}
