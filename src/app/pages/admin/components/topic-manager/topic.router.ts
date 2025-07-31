import { Routes } from '@angular/router';

export const topicRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Topic'
    },
    children: [
      {
        path: '',
        redirectTo: 'topic',
        pathMatch: 'full'
      },
      {
        path: 'topic',
        loadComponent: () => import('./topic-manager.component').then(m => m.TopicManagerComponent),
        data: {
          title: 'Topic Yönetimi'
        }
      },
    ]
  }
];

