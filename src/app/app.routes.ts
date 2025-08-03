import { Routes } from '@angular/router';
import { Admin } from './pages/admin';
import { adminRoutes } from './pages/admin/admin.routes';
import { studentRoutes } from './pages/student/student.router';
import { Student } from './pages/student';
import { Register } from './pages/auths/register/register';
import { registerRoutes } from './pages/auths/register/register.router';
import { authGuard } from './core/guards/auth.guard';
import { Home } from './pages/student/components/home/home';
import { ParentComponent, parentRoutes, Teacher, teacherRoutes } from './pages';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:Home},

  // Admin
  {path:'admin',component:Admin,children:adminRoutes,canActivate: [authGuard]},

  //Student
  {path:'student',component:Student,children:studentRoutes,canActivate: [authGuard]},
  
  //Teacher
  {path:'teacher',component:Teacher,children:teacherRoutes,canActivate: [authGuard]},

  //Parent
  {path:'parent',component:ParentComponent,children:parentRoutes,canActivate: [authGuard]},

  {path:'register',component:Register,children:registerRoutes},
  
  {
    path: 'login',
    loadComponent: () => import('./pages/auths/login/login').then(m => m.Login),
    data: { title: 'Login' }
  },
  { path: '**', redirectTo: 'home' },
];
