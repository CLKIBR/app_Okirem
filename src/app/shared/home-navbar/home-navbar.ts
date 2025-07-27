import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core';

@Component({
  selector: 'home-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-navbar.html',
  styleUrl: './home-navbar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeNavbar {
  private router = inject(Router);
  private authService = inject(AuthService);

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  async closeLogin() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}

