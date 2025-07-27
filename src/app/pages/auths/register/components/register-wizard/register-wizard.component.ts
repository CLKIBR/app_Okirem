import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService, WizardStep, UserRole } from '../../../../../core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-wizard.component.html',
  styleUrls: ['./register-wizard.component.scss']
})
export class RegisterWizardComponent implements OnInit {
  role: UserRole = 'student';
  steps: WizardStep[] = [];
  currentStep = 0;
  form!: FormGroup;

  private route = inject(ActivatedRoute);
  private registrationService = inject(RegistrationService);
  private fb = inject(FormBuilder);
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private router = inject(Router);

  ngOnInit(): void {
    const queryRole = this.route.snapshot.queryParamMap.get('role') as UserRole;
    if (queryRole) this.role = queryRole;

    this.steps = this.registrationService.getStepsForRole(this.role);

    const group: any = {};
    for (const step of this.steps) {
      group[step.field] = ['']; // basit setup, validasyon sonra eklenecek
    }

    this.form = this.fb.group(group);

    console.log('📌 Rol:', this.role);
    console.log('📋 Adımlar:', this.steps);
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  async submit() {
    if (this.form.valid) {
      try {
        const user = this.auth.currentUser;
        if (!user) throw new Error('Kullanıcı oturumu yok!');
        const uid = user.uid;
        const data = {
          ...this.form.value,
          role: this.role,
          createdAt: new Date().toISOString()
        };
        const ref = doc(this.firestore, `users/${uid}/user-profile`);
        await setDoc(ref, data);
        console.log('✅ Firestore kaydı başarılı:', data);
        this.router.navigate(['/dashboard']);
      } catch (err) {
        console.error('❌ Firestore kayıt hatası:', err);
      }
    }
  }

  onMultiSelectChange(field: string, event: Event): void {
  const input = event.target as HTMLInputElement;
  const selected = this.form.value[field] || [];

  if (input.checked) {
    this.form.patchValue({
      [field]: [...selected, input.value]
    });
  } else {
    this.form.patchValue({
      [field]: selected.filter((v: string) => v !== input.value)
    });
  }
}
}
