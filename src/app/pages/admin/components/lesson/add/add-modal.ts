import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService, Lesson } from '../../../../../core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'add-lesson-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-modal.html',
  styleUrl: './add-modal.css'
})
export class AddLessonModal {
  @Output() close = new EventEmitter<void>();
  @Output() added = new EventEmitter<Lesson>();
  private lessonService = inject(LessonService);
  private fb = inject(FormBuilder);

  lessonForm = this.fb.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    duration: [0, Validators.required],
    icon: ['', Validators.required],
    gradient: ['', Validators.required]
  });

  addLesson() {
    if (this.lessonForm.valid) {
      const lesson: Lesson = this.lessonForm.value as Lesson;
      this.lessonService.addLesson(lesson).then(() => {
        this.added.emit(lesson);
        this.lessonForm.reset();
        this.close.emit();
      });
    }
  }
}
