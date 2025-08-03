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
        loadComponent: () => import('./unit-manager').then(m => m.UnitManager),
        data: {
          title: 'Unit Yönetimi'
        }
      },
    ]
  }
];

