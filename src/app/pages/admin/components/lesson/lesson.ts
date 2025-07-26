import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService, Lesson } from '../../../../core/services/lesson.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddLessonModal } from './add/add-modal';
import { UpdateLessonModal } from './update/update-modal';
import { DeleteLessonModal } from './delete/delete-modal';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'iconify-icon';

@Component({
  selector: 'admin-lesson',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddLessonModal, UpdateLessonModal, DeleteLessonModal],
  templateUrl: './lesson.html',
  styleUrl: './lesson.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LessonComponent {
  private lessonService = inject(LessonService);
  lessons = signal<(Lesson & { id: string })[]>([]);
  selectedLesson = signal<Lesson & { id: string } | null>(null);
  showAddModal = signal(false);
  showUpdateModal = signal(false);
  showDeleteModal = signal(false);

  constructor() {
    this.lessonService.getLessons().subscribe(data => {
      this.lessons.set(data);
    });
  }

  openAddModal() {
    this.showAddModal.set(true);
  }
  closeAddModal() {
    this.showAddModal.set(false);
  }
  onLessonAdded() {
    this.closeAddModal();
  }

  openUpdateModal(lesson: Lesson & { id: string }) {
    this.selectedLesson.set(lesson);
    this.showUpdateModal.set(true);
  }
  closeUpdateModal() {
    this.showUpdateModal.set(false);
    this.selectedLesson.set(null);
  }
  onLessonUpdated() {
    this.closeUpdateModal();
  }

  openDeleteModal(lesson: Lesson & { id: string }) {
    this.selectedLesson.set(lesson);
    this.showDeleteModal.set(true);
  }
  closeDeleteModal() {
    this.showDeleteModal.set(false);
    this.selectedLesson.set(null);
  }
  onLessonDeleted() {
    this.closeDeleteModal();
  }

  getIconColor(gradient: string): string {
    if (gradient.includes('indigo')) return '#6366f1';
    if (gradient.includes('pink') || gradient.includes('rose')) return '#ec4899';
    if (gradient.includes('green') || gradient.includes('teal') || gradient.includes('emerald') || gradient.includes('lime')) return '#22c55e';
    if (gradient.includes('yellow') || gradient.includes('amber') || gradient.includes('orange')) return '#f59e42';
    if (gradient.includes('blue') || gradient.includes('sky') || gradient.includes('cyan') || gradient.includes('purple')) return '#3b82f6';
    return '#6366f1';
  }
}
