import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-unit-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-unit-modal.component.html',
})
export class UpdateUnitModalComponent implements OnChanges {
  @Input() unit: { id: string; title: string; order: number } | null = null;
  @Output() update = new EventEmitter<{ id: string; title: string; order: number }>();
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  unitForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    order: [0, Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['unit'] && this.unit) {
      this.unitForm.patchValue({ title: this.unit.title, order: this.unit.order });
    }
  }

  submit() {
    if (this.unitForm.invalid || !this.unit) return;
    this.update.emit({ id: this.unit.id, ...this.unitForm.value });
  }
}
