import { Routes } from '@angular/router';

export const unitRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Unit'
    },
    children: [
      {
        path: '',
        redirectTo: 'unit',
        pathMatch: 'full'
      },
      {
        path: 'unit',
        loadComponent: () => import('./unit-manager.component').then(m => m.UnitManagerComponent),
        data: {
          title: 'Unit Yönetimi'
        }
      },
    ]
  }
];

