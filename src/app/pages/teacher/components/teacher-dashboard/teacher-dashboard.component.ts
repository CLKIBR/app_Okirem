import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
