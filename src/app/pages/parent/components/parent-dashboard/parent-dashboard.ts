import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-parent-dashboard',
  imports: [],
  templateUrl: './parent-dashboard.html',
  styleUrl: './parent-dashboard.scss'
})
export class ParentDashboard {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
