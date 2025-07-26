import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";


export const adminRoutes: Routes = [

  //adminhomepage
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },



  {
    path: 'lesson',
    loadChildren: () => import('./../admin/components/lesson/lesson.router').then((m) => m.lessonRoutes)
  },
  {
    path: 'base',
    loadChildren: () => import('./../../shared/base/routes').then((m) => m.routes)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./../../shared/buttons/routes').then((m) => m.routes)
  },
  {
    path: 'forms',
    loadChildren: () => import('./../../shared/forms/routes').then((m) => m.routes)
  },
  {
    path: 'icons',
    loadChildren: () => import('./../../shared/icons/routes').then((m) => m.routes)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./../../shared/notifications/routes').then((m) => m.routes)
  },
  {
    path: 'widgets',
    loadChildren: () => import('./../../shared/widgets/routes').then((m) => m.routes)
  },
  {
    path: 'charts',
    loadChildren: () => import('./../../shared/charts/routes').then((m) => m.routes)
  },
  {
    path: 'pages',
    loadChildren: () => import('./../../shared/pages/routes').then((m) => m.routes)
  }
];
