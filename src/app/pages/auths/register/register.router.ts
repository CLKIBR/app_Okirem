import { Routes } from '@angular/router';
import { RegisterWolcome } from './components';

export const registerRoutes: Routes = [
  { path: 'wolcome', component: RegisterWolcome },
  {
    path: 'wizard',
    loadComponent: () =>
      import('./components/register-wizard/register-wizard.component').then(
        (m) => m.RegisterWizardComponent
      ),
  },
];
