import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Login {
  private async navigateByRole(uid: string | undefined) {
  console.log('[NavigateByRole] UID:', uid);

  if (!uid) {
    console.warn('[NavigateByRole] UID boş, dashboarda yönlendiriliyor...');
    await this.router.navigate(['/dashboard']);
    return;
  }

  const role = await firstValueFrom(this.authService.getUserRole$(uid));
  console.log('[NavigateByRole] Kullanıcı rolü:', role);

  if (role === 'admin') {
    console.log('[NavigateByRole] → /admin');
    await this.router.navigate(['/admin']);
  } else if (role === 'student') {
    console.log('[NavigateByRole] → /student');
    await this.router.navigate(['/student']);
  } else if (role === 'teacher') {
    console.log('[NavigateByRole] → /teacher');
    await this.router.navigate(['/teacher']);
  } else if (role === 'parent') {
    console.log('[NavigateByRole] → /parent');
    await this.router.navigate(['/parent']);
  } else {
    console.warn('[NavigateByRole] Rol bulunamadı, ana sayfaya yönlendiriliyor.');
    await this.router.navigate(['/']);
  }
}

  closeLogin() {
    this.router.navigate(['/']);
  }
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  errorMessage = '';
  isLoading = false;

  async loginWithEmail() {
    if (this.form.invalid) return;
    this.isLoading = true;
    this.errorMessage = '';
    const { email, password } = this.form.value;
    try {
      await this.authService.loginWithEmail(email!, password!);
      // Kullanıcı rolüne göre yönlendir
      const currentUser = this.authService.currentUser;
      await this.navigateByRole(currentUser?.uid);
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found':
          this.errorMessage = 'Kullanıcı bulunamadı. Lütfen kayıt olun.';
          break;
        case 'auth/wrong-password':
          this.errorMessage = 'Şifreniz yanlış, lütfen tekrar deneyin.';
          break;
        case 'auth/invalid-email':
          this.errorMessage = 'Geçersiz e-posta adresi.';
          break;
        case 'auth/invalid-credential':
          this.errorMessage = 'E-posta veya şifre hatalı, lütfen tekrar deneyin.';
          break;
        case 'auth/user-disabled':
          this.errorMessage = 'Bu kullanıcı hesabı devre dışı bırakılmış.';
          break;
        default:
          this.errorMessage = 'Giriş başarısız: ' + (err.message || 'Bilinmeyen hata.');
      }
    } finally {
      this.isLoading = false;
    }
  }

  async loginWithGoogle() {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      await this.authService.loginWithGoogle();
      // Kullanıcı rolüne göre yönlendir
      const currentUser = this.authService.currentUser;
      await this.navigateByRole(currentUser?.uid);
    } catch (err: any) {
      this.errorMessage = err.message || 'Google ile giriş başarısız.';
    } finally {
      this.isLoading = false;
    }
  }

  goToRegister() {
  this.router.navigate(['/register/wolcome']);
}
}
