import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData, collection, doc, updateDoc, query, where, orderBy } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

export interface DailyTask {
  id: string;
  title: string;
  description: string;
  icon: string;
  rewardType: 'xp' | 'coin';
  rewardValue: number;
  isCompleted: boolean;
  order: number;
  dueDate: string;
}

@Component({
  selector: 'daily-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daily-tasks.html',
  styleUrls: ['./daily-tasks.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyTasksComponent implements OnInit {
  trackById(index: number, item: DailyTask): string {
    return item.id;
  }
  @Input() studentId!: string;

  tasks$ = new BehaviorSubject<DailyTask[]>([]);
  loading$ = new BehaviorSubject<boolean>(true);
  error$ = new BehaviorSubject<string | null>(null);
  allComplete$ = new BehaviorSubject<boolean>(false);
  quote = '';

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    if (!this.studentId) {
      this.error$.next('No student ID');
      this.loading$.next(false);
      return;
    }
    this.fetchTasks();
  }

  fetchTasks() {
    this.loading$.next(true);
    const tasksQuery = query(
      collection(this.firestore, 'daily-tasks'),
      where('studentId', '==', this.studentId),
      orderBy('order'),
      orderBy('dueDate')
    );
    collectionData(tasksQuery, { idField: 'id' })
      .pipe(
        map((tasks: any[]) => tasks as DailyTask[]),
        tap(tasks => {
          this.tasks$.next(tasks);
          this.allComplete$.next(tasks.length > 0 && tasks.every(t => t.isCompleted));
          if (tasks.length === 0) this.error$.next('No tasks for today');
          else this.error$.next(null);
          this.loading$.next(false);
          if (tasks.length > 0 && tasks.every(t => t.isCompleted)) {
            this.quote = this.getMotivationalQuote();
          } else {
            this.quote = '';
          }
        }),
        catchError(err => {
          this.error$.next('Failed to load tasks');
          this.loading$.next(false);
          return of([]);
        })
      )
      .subscribe();
  }

  markComplete(task: DailyTask) {
    if (task.isCompleted) return;
    const taskRef = doc(this.firestore, 'daily-tasks', task.id);
    updateDoc(taskRef, { isCompleted: true })
      .then(() => {
        const updatedTasks = this.tasks$.value.map(t =>
          t.id === task.id ? { ...t, isCompleted: true } : t
        );
        this.tasks$.next(updatedTasks);
        this.allComplete$.next(updatedTasks.every(t => t.isCompleted));
        if (updatedTasks.every(t => t.isCompleted)) {
          this.quote = this.getMotivationalQuote();
        }
      })
      .catch(() => {
        this.error$.next('Failed to update task');
      });
  }

  getStatus(task: DailyTask): 'pending' | 'completed' | 'expired' {
    const now = new Date();
    const due = new Date(task.dueDate);
    if (task.isCompleted) return 'completed';
    if (due < now) return 'expired';
    return 'pending';
  }

  getMotivationalQuote(): string {
    const quotes = [
      "Great job! Every step counts.",
      "You did it! Keep up the momentum.",
      "Success is the sum of small efforts.",
      "Your dedication is inspiring!",
      "All tasks complete – you rock!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}
