import { Routes } from '@angular/router';

export const settingsRoutes: Routes = [
  {
    path: 'account',
    loadComponent: () => import('./account-settings/account-settings').then(m => m.AccountSettings),
    data: { title: 'Kullanıcı Hesap ve Veri Silme' }
  }
];
