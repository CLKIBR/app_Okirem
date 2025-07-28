import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-parent-dashboard',
  imports: [],
  templateUrl: './parent-dashboard.component.html',
  styleUrl: './parent-dashboard.component.scss'
})
export class ParentDashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
