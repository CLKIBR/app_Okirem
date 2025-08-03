import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuditLogPanel } from './components/audit-log-panel/audit-log-panel';
import { AuditLogGuard } from '../../core/guards/audit-log-guard';

export const adminRoutes: Routes = [
  //adminhomepage
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'audit-logs',
    component: AuditLogPanel,
    canActivate: [AuditLogGuard]
  },
  {
    path: 'lesson',
    loadChildren: () => import('./../admin/components/lesson/lesson.router').then((m) => m.lessonRoutes)
  },
  {
    path: 'unit',
    loadChildren: () => import('./components/unit-manager/unit.router').then((m) => m.unitRoutes)
  },
  {
    path: 'topic',
    loadChildren: () => import('./components/topic-manager/topic.router').then((m) => m.topicRoutes)
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
