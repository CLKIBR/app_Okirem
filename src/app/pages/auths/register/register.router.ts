import { Routes } from '@angular/router';
import {
  RegisterParent,
  RegisterStudent,
  RegisterTeacher,
  RegisterWolcome,
} from './components';

export const registerRoutes: Routes = [
  { path: 'wolcome', component: RegisterWolcome },
  { path: 'student', component: RegisterStudent },
  { path: 'teacher', component: RegisterTeacher },
  { path: 'parent', component: RegisterParent },
];
