import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-topic-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-topic-modal.component.html',
})
export class UpdateTopicModalComponent implements OnChanges {
  @Input() topic: any = null;
  @Output() update = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  topicForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    subtitle: [''],
    icon: [''],
    image: [''],
    order: [0, Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['topic'] && this.topic) {
      this.topicForm.patchValue({
        title: this.topic.title,
        subtitle: this.topic.subtitle,
        icon: this.topic.icon,
        image: this.topic.image,
        order: this.topic.order,
      });
    }
  }

  submit() {
    if (this.topicForm.invalid || !this.topic) return;
    this.update.emit({ id: this.topic.id, ...this.topicForm.value });
  }
}
