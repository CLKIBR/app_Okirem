import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-teacher',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-teacher.html',
  styleUrl: './register-teacher.scss'
})
export class RegisterTeacher {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    branch: ['']
  });

  async submit() {
    if (this.form.invalid) return;
    // Kayıt işlemi burada yapılacak
  }
}
