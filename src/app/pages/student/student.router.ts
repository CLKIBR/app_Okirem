import { Routes } from "@angular/router";
import { Home, StudentDashboardComponent } from "./components";

export const studentRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: StudentDashboardComponent }
]