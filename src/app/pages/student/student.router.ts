import { Routes } from "@angular/router";
import { StudentDashboard } from "./components";
import { settingsRoutes } from "../settings/settings.routes";

export const studentRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: StudentDashboard},
    { path: 'settings', children: settingsRoutes},
]