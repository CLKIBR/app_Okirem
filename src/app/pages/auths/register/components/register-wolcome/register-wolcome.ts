// ...existing code...
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-wolcome',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './register-wolcome.html',
  styleUrl: './register-wolcome.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterWolcome {
  getIconColor(gradient: string): string {
    if (
      gradient.includes('indigo') ||
      gradient.includes('fuchsia') ||
      gradient.includes('pink')
    )
      return '#ec4899';
    if (
      gradient.includes('blue') ||
      gradient.includes('cyan') ||
      gradient.includes('teal')
    )
      return '#0ea5e9';
    if (
      gradient.includes('amber') ||
      gradient.includes('orange') ||
      gradient.includes('yellow')
    )
      return '#f59e42';
    return '#6366f1';
  }
  router = inject(Router);

  roleCards = [
  {
    title: 'Öğrenciyim',
    description: 'Görevleri tamamla, XP topla, seviye atla!',
    icon: 'assets/images/hero.png',
    role: 'student',
    gradient: 'from-indigo-400 via-fuchsia-500 to-pink-500',
    message: 'Hazırsan tıkla ve öğrenmeye başla! 🚀📚'
  },
  {
    title: 'Öğretmenim',
    description: 'Görev ata, takip et, raporla.',
    icon: 'assets/images/teacher.png',
    role: 'teacher',
    gradient: 'from-blue-400 via-cyan-500 to-teal-400',
    message: 'Hemen kaydol, öğrencilerinle fark yarat! 👩‍🏫✨'
  },
  {
    title: 'Veliyim',
    description: 'Çocuğunun gelişimini takip et.',
    icon: 'assets/images/parents.png',
    role: 'parent',
    gradient: 'from-amber-400 via-orange-400 to-yellow-400',
    message: 'Çocuğunun yolculuğuna katılmak için tıkla! 🧒❤️'
  },
];


  selectRole(role: string) {
    this.router.navigate(['/register/wizard'], {
      queryParams: { role },
    });
  }
}
