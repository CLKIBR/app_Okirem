import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegistrationService, WizardStep, UserRole } from '../../../../../core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './register-wizard.html',
  styleUrls: ['./register-wizard.scss'],
})
export class RegisterWizard implements OnInit {
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
      group[step.field] = step.required ? ['', Validators.required] : [''];
    }
    this.form = this.fb.group(group);
  }

  nextStep() {
    const field = this.steps[this.currentStep].field;
    const control = this.form.get(field);

    if (control?.invalid) {
      control.markAsTouched();
      return;
    }

    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.router.navigate(['/register/wolcome']);
    }
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  async submit() {
    if (!this.form.valid) {
      const field = this.steps[this.currentStep].field;
      this.form.get(field)?.markAsTouched();
      return;
    }

    try {
      const { email, password, ...profileData } = this.form.value;

      // 🔐 Firebase Auth → kullanıcıyı oluştur
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      // 📁 Firestore → şifre HARİÇ tüm veriler
      const data = {
        ...profileData,
        email, // 🔒 email kaydedilir
        role: this.role,
        createdAt: new Date().toISOString(),
      };

      const ref = doc(this.firestore, `users/${uid}`);
      await setDoc(ref, data);

      // 🔁 Role'a göre yönlendirme
      let targetRoute = '/student';
      if (this.role === 'teacher') targetRoute = '/teacher';
      else if (this.role === 'parent') targetRoute = '/parent';

      this.router.navigate([targetRoute]);
    } catch (err) {
      // TODO: kullanıcıya toast ile göster
    }
  }

  onMultiSelectChange(field: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const selected = this.form.value[field] || [];

    if (input.checked) {
      this.form.patchValue({
        [field]: [...selected, input.value],
      });
    } else {
      this.form.patchValue({
        [field]: selected.filter((v: string) => v !== input.value),
      });
    }
  }
}
