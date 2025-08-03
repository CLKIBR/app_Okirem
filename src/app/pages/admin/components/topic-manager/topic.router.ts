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
        loadComponent: () => import('./topic-manager').then(m => m.TopicManager),
        data: {
          title: 'Topic Yönetimi'
        }
      },
    ]
  }
];

