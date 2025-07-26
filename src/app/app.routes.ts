import { Routes } from '@angular/router';
import { Admin } from './pages/admin';
import { adminRoutes } from './pages/admin/admin.routes';
import { studentRoutes } from './pages/student/student.router';
import { StudentComponent } from './pages/student';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  //Site
  {path:'',component:StudentComponent, children:studentRoutes},

  // Admin
  {path:'admin',component:Admin,children:adminRoutes},






  {
    path: '404',
    loadComponent: () =>
      import('./shared/pages/page404/page404.component').then(
        (m) => m.Page404Component
      ),
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    loadComponent: () =>
      import('./shared/pages/page500/page500.component').then(
        (m) => m.Page500Component
      ),
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./shared/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./shared/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    data: {
      title: 'Register Page',
    },
  },
  { path: '**', redirectTo: 'home' },
];
