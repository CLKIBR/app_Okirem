import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-parent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-parent.html',
  styleUrl: './register-parent.scss'
})
export class RegisterParent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    studentEmail: ['']
  });

  async submit() {
    if (this.form.invalid) return;
    // Kayıt işlemi burada yapılacak
  }
}
