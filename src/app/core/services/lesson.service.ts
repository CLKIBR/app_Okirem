import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Lesson {
  title: string;
  date: string;
  duration: number;
  icon: string;
  gradient: string;
}

@Injectable({ providedIn: 'root' })
export class LessonService {
  constructor(private firestore: Firestore) {}

  getLessons(): Observable<(Lesson & { id: string })[]> {
    const lessonsRef = collection(this.firestore, 'lessons');
    return collectionData(lessonsRef, { idField: 'id' }) as Observable<(Lesson & { id: string })[]>;
  }

  addLesson(lesson: Lesson): Promise<void> {
    const lessonsRef = collection(this.firestore, 'lessons');
    return addDoc(lessonsRef, lesson).then(() => {});
  }

  updateLesson(id: string, lesson: Lesson): Promise<void> {
    const docRef = doc(this.firestore, 'lessons', id);
    return updateDoc(docRef, { ...lesson }).then(() => {});
  }

  deleteLesson(id: string): Promise<void> {
    const docRef = doc(this.firestore, 'lessons', id);
    return deleteDoc(docRef).then(() => {});
  }
}
