import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';
import { DailyTasksComponent } from '../daily-tasks/daily-tasks';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, DailyTasksComponent],
})
export class StudentDashboard {
  private authService = inject(AuthService);
  private router = inject(Router);
  public studentId: string | null = null;

  constructor() {
    this.authService.user$.subscribe(user => {
      this.studentId = user?.uid ?? null;
    });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/home']);
  }
}
