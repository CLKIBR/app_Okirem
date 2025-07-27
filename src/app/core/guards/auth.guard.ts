import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.currentUser;
  if (!user) {
    router.navigate(['/login']);
    return false;
  }
  const role = await authService.getUserRole(user.uid);
  if (role !== 'admin') {
    router.navigate(['/admin/dashboard']);
    return false;
  }
  return true;
};
