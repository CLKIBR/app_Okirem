import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DailyTasksComponent, DailyTask } from './daily-tasks';
import { Firestore } from '@angular/fire/firestore';
import { of, throwError } from 'rxjs';

const mockTasks: DailyTask[] = [
  {
    id: '1',
    title: 'Read a chapter',
    description: 'Read any chapter from your textbook.',
    icon: 'book',
    rewardType: 'xp',
    rewardValue: 10,
    isCompleted: false,
    order: 1,
    dueDate: new Date(Date.now() + 86400000).toISOString(),
  },
  {
    id: '2',
    title: 'Solve 5 problems',
    description: 'Practice math problems.',
    icon: 'calculator',
    rewardType: 'coin',
    rewardValue: 5,
    isCompleted: true,
    order: 2,
    dueDate: new Date(Date.now() + 86400000).toISOString(),
  }
];

class FirestoreMock {
  collection() { return this; }
  doc() { return this; }
  updateDoc() { return Promise.resolve(); }
}

describe('DailyTasksComponent', () => {
  let component: DailyTasksComponent;
  let fixture: ComponentFixture<DailyTasksComponent>;
  let firestore: FirestoreMock;

  beforeEach(async () => {
    firestore = new FirestoreMock();
    await TestBed.configureTestingModule({
      imports: [DailyTasksComponent],
      providers: [{ provide: Firestore, useValue: firestore }],
    }).compileComponents();
    fixture = TestBed.createComponent(DailyTasksComponent);
    component = fixture.componentInstance;
    component.studentId = 'student1';
  });

  it('should display loader initially', () => {
    component.loading$.next(true);
    fixture.detectChanges();
    const loader = fixture.nativeElement.querySelector('.animate-spin');
    expect(loader).toBeTruthy();
  });

  it('should display empty state if no tasks', () => {
    component.tasks$.next([]);
    component.loading$.next(false);
    fixture.detectChanges();
    const empty = fixture.nativeElement.textContent;
    expect(empty).toContain('No daily tasks assigned');
  });

  it('should display error state', () => {
    component.error$.next('API error');
    fixture.detectChanges();
    const error = fixture.nativeElement.textContent;
    expect(error).toContain('API error');
  });

  it('should display tasks', () => {
    component.tasks$.next(mockTasks);
    component.loading$.next(false);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('[role="listitem"]');
    expect(cards.length).toBe(2);
  });

  it('should mark a task as complete', fakeAsync(() => {
    spyOn(firestore, 'updateDoc').and.returnValue(Promise.resolve());
    component.tasks$.next([mockTasks[0]]);
    component.markComplete(mockTasks[0]);
    tick();
    expect(component.tasks$.value[0].isCompleted).toBeTrue();
  }));

  it('should display motivational quote if all tasks are complete', () => {
    component.tasks$.next(mockTasks.map(t => ({ ...t, isCompleted: true })));
    component.allComplete$.next(true);
    component.quote = component.getMotivationalQuote();
    fixture.detectChanges();
    const quote = fixture.nativeElement.textContent;
    expect(quote).toContain('job'); // partial match
  });
});
