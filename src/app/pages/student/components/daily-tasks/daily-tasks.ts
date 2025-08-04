import { Component, Input, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  type: string;    // Görev tipi (ör: 'quiz', 'game')
  target: string;  // Görev hedefi (quizId, gameId vs.)
}

@Component({
  selector: 'daily-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daily-tasks.html',
  styleUrls: ['./daily-tasks.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyTasksComponent implements OnInit, OnChanges {
  completedTasks: DailyTask[] = [];
  expiredTasks: DailyTask[] = [];
  viewMode: 'active' | 'completed' | 'expired' = 'active';
  trackById(index: number, item: DailyTask): string {
    return item.id;
  }
  @Input() studentId: string | null = null;

  tasks$ = new BehaviorSubject<DailyTask[]>([]);
  loading$ = new BehaviorSubject<boolean>(true);
  error$ = new BehaviorSubject<string | null>(null);
  allComplete$ = new BehaviorSubject<boolean>(false);
  quote = '';

  constructor(private firestore: Firestore, private router: Router) {}

  ngOnInit() {
    if (this.studentId) {
      this.fetchTasks();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentId'] && changes['studentId'].currentValue) {
      this.error$.next(null);
      this.fetchTasks();
    } else if (changes['studentId'] && !changes['studentId'].currentValue) {
      // Hata mesajını hemen göstermiyoruz, sadece veri geldikten sonra gerekirse gösterilecek
      this.error$.next(null);
      this.loading$.next(true);
    }
  }

  fetchTasks() {
    this.loading$.next(true);
    // Sadece ilgili öğrenciye ait görevleri çek
    const tasksQuery = query(
      collection(this.firestore, 'daily-tasks'),
      where('studentId', '==', this.studentId),
      orderBy('order'),
      orderBy('dueDate')
    );
    collectionData(tasksQuery, { idField: 'id' })
      .pipe(
        map((tasks: any[]) => {
          // Firestore'dan gelen dueDate timestamp ise stringe çevir
          return tasks.map(task => ({
            ...task,
            dueDate: task.dueDate && typeof task.dueDate.toDate === 'function'
              ? task.dueDate.toDate().toISOString()
              : task.dueDate
          })) as DailyTask[];
        }),
        tap(tasks => {
          // Aktif görevler (tamamlanmamış ve süresi geçmemiş)
          const now = new Date();
          const activeTasks = tasks.filter(t => !t.isCompleted && new Date(t.dueDate) >= now);
          // Tamamlanan görevler
          const completedTasks = tasks.filter(t => t.isCompleted);
          // Süresi geçmiş görevler
          const expiredTasks = tasks.filter(t => !t.isCompleted && new Date(t.dueDate) < now);

          this.tasks$.next(activeTasks);
          this.completedTasks = completedTasks;
          this.expiredTasks = expiredTasks;

          this.allComplete$.next(tasks.length > 0 && tasks.every(t => t.isCompleted));
          this.error$.next(null);
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
      .subscribe(tasks => {
      });
  }

  markComplete(task: DailyTask) {
    if (task.isCompleted) return;
    // Görev tipine göre task-play sayfasına yönlendir
    this.router.navigate(['/student/task-play', task.id], {
      queryParams: {
        type: task['type'] || 'quiz',
        target: task['target'] || ''
      }
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
