import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-unit-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-unit-modal.component.html',
})
export class AddUnitModalComponent {
  @Output() add = new EventEmitter<{ title: string; order: number }>();
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  unitForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    order: [0, Validators.required],
  });

  submit() {
    if (this.unitForm.invalid) return;
    this.add.emit(this.unitForm.value);
    this.unitForm.reset({ title: '', order: 0 });
  }
}
