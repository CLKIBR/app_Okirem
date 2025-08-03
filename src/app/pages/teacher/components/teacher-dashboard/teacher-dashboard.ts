import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.html',
  styleUrls: ['./teacher-dashboard.scss']
})
export class TeacherDashboard {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
