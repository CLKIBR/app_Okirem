import { Routes } from '@angular/router';
import { Admin } from './pages/admin';
import { adminRoutes } from './pages/admin/admin.routes';
import { studentRoutes } from './pages/student/student.router';
import { StudentComponent } from './pages/student';
import { Register } from './pages/auths/register/register';
import { registerRoutes } from './pages/auths/register/register.router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  //Site
  {path:'',component:StudentComponent, children:studentRoutes},

  // Admin
  {path:'admin',component:Admin,children:adminRoutes,canActivate: [authGuard]},






  
  {path:'register',component:Register,children:registerRoutes},
  
  {
    path: 'login',
    loadComponent: () => import('./pages/auths/login/login').then(m => m.Login),
    data: { title: 'Login' }
  },
  { path: '**', redirectTo: 'home' },
];
