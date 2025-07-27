import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../core';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-student.html',
  styleUrl: './register-student.scss'
})
export class RegisterStudent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    parentEmail: ['']
  });

  errorMessage = '';
  isLoading = false;

  private authService = inject(AuthService);

  async submit() {
    if (this.form.invalid) return;
    this.isLoading = true;
    this.errorMessage = '';
    const { email, password } = this.form.value;
    try {
      await this.authService.registerWithEmail(email!, password!, { role: 'student' });
      await this.router.navigate(['/dashboard']);
    } catch (err: any) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          this.errorMessage = 'Bu e-posta zaten kayıtlı.';
          break;
        case 'auth/invalid-email':
          this.errorMessage = 'Geçersiz e-posta adresi.';
          break;
        case 'auth/weak-password':
          this.errorMessage = 'Şifre çok zayıf, lütfen daha güçlü bir şifre girin.';
          break;
        default:
          this.errorMessage = 'Kayıt başarısız: ' + (err.message || 'Bilinmeyen hata.');
      }
    } finally {
      this.isLoading = false;
    }
  }
}
