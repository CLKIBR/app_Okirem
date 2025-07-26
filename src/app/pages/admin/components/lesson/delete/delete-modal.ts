import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService } from '../../../../../core';

@Component({
  selector: 'delete-lesson-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.html',
  styleUrl: './delete-modal.css'
})
export class DeleteLessonModal {
  @Input() lessonId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<string>();
  private lessonService = inject(LessonService);

  deleteLesson() {
    this.lessonService.deleteLesson(this.lessonId).then(() => {
      this.deleted.emit(this.lessonId);
      this.close.emit();
    });
  }
}
