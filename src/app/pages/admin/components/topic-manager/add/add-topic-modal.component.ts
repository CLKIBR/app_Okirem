import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-topic-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-topic-modal.component.html',
})
export class AddTopicModalComponent {
  @Output() add = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  topicForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    subtitle: [''],
    icon: [''],
    image: [''],
    order: [0, Validators.required],
  });

  submit() {
    if (this.topicForm.invalid) return;
    this.add.emit(this.topicForm.value);
    this.topicForm.reset({ title: '', subtitle: '', icon: '', image: '', order: 0 });
  }
}
