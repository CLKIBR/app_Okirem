// ...existing code...
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wolcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-wolcome.html',
  styleUrl: './register-wolcome.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterWolcome {
  getIconColor(gradient: string): string {
    if (gradient.includes('indigo') || gradient.includes('fuchsia') || gradient.includes('pink')) return '#ec4899';
    if (gradient.includes('blue') || gradient.includes('cyan') || gradient.includes('teal')) return '#0ea5e9';
    if (gradient.includes('amber') || gradient.includes('orange') || gradient.includes('yellow')) return '#f59e42';
    return '#6366f1';
  }
  router = inject(Router);

  roleCards = [
    {
      title: 'Öğrenciyim',
      description: 'Görevleri tamamla, XP topla, seviye atla!',
      icon: 'mdi:account-school',
      role: 'student',
      gradient: 'from-indigo-400 via-fuchsia-500 to-pink-500'
    },
    {
      title: 'Öğretmenim',
      description: 'Görev ata, takip et, raporla.',
      icon: 'mdi:account-tie',
      role: 'teacher',
      gradient: 'from-blue-400 via-cyan-500 to-teal-400'
    },
    {
      title: 'Veliyim',
      description: 'Çocuğunun gelişimini takip et.',
      icon: 'mdi:account-heart',
      role: 'parent',
      gradient: 'from-amber-400 via-orange-400 to-yellow-400'
    }
  ];

  selectRole(role: string) {
    if (role === 'student') {
      this.router.navigate(['/register/class']);
    } else if (role === 'teacher') {
      this.router.navigate(['/register/teacher-profile']);
    } else if (role === 'parent') {
      this.router.navigate(['/register/parent-connect']);
    }
  }
}
