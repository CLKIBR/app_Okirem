import { Routes } from "@angular/router";
import { TeacherDashboardComponent } from "./components";

export const teacherRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: TeacherDashboardComponent }
]