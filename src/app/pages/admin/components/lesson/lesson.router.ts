import { Routes } from '@angular/router';

export const lessonRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Lesson'
    },
    children: [
      {
        path: '',
        redirectTo: 'lesson',
        pathMatch: 'full'
      },
      {
        path: 'lesson',
        loadComponent: () => import('./lesson').then(m => m.LessonComponent),
        data: {
          title: 'Lesson'
        }
      },
    ]
  }
];

