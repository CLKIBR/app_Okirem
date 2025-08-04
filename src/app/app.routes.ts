import { Routes } from '@angular/router';
import { legalRoutes } from './shared';
import { authGuard,CanliDers } from './core';
import {
  ParentComponent,
  parentRoutes,
  Teacher,
  teacherRoutes,
  Home,
  registerRoutes,
  Register,
  studentRoutes,
  adminRoutes,
  Admin,
  Student,
} from './pages';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  
  // Admin
  {
    path: 'admin',
    component: Admin,
    children: adminRoutes,
    canActivate: [authGuard],
  },

  //Student
  {
    path: 'student',
    component: Student,
    children: studentRoutes,
    canActivate: [authGuard],
  },

  //Teacher
  {
    path: 'teacher',
    component: Teacher,
    children: teacherRoutes,
    canActivate: [authGuard],
  },

  //Parent
  {
    path: 'parent',
    component: ParentComponent,
    children: parentRoutes,
    canActivate: [authGuard],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auths/login/login').then((m) => m.Login),
    data: { title: 'Login' },
  },
  { path: 'register', component: Register, children: registerRoutes },
  {
    path: 'legal',
    children: legalRoutes,
  },
  {
    path: 'canli-ders',
    component: CanliDers,
    title: 'Canlı Ders'
  },
  { path: '**', redirectTo: 'home' },
];
