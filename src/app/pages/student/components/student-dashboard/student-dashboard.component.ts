import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
