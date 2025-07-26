import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService, Lesson } from '../../../../../core/services/lesson.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'update-lesson-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-modal.html',
  styleUrl: './update-modal.css'
})
export class UpdateLessonModal {
  @Input() lesson!: Lesson & { id: string };
  @Output() close = new EventEmitter<void>();
  @Output() updated = new EventEmitter<Lesson>();
  private lessonService = inject(LessonService);
  private fb = inject(FormBuilder);

  lessonForm = this.fb.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    duration: [0, Validators.required],
    icon: ['', Validators.required],
    gradient: ['', Validators.required]
  });

  ngOnInit() {
    if (this.lesson) {
      const { id, ...rest } = this.lesson;
      this.lessonForm.patchValue(rest);
    }
  }

  updateLesson() {
    if (this.lessonForm.valid) {
      const updatedLesson: Lesson = this.lessonForm.value as Lesson;
      this.lessonService.updateLesson(this.lesson.id, updatedLesson).then(() => {
        this.updated.emit(updatedLesson);
        this.close.emit();
      });
    }
  }
}
