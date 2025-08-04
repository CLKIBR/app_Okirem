import { Routes } from "@angular/router";
import { StudentDashboard } from "./components";
import { settingsRoutes } from "../settings/settings.routes";

import { DailyTasksComponent } from "./components/daily-tasks/daily-tasks";
import { TaskPlayComponent } from "./components/task-play/task-play";
import { Leaderboard } from "./components/leaderboard/leaderboard";

export const studentRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: StudentDashboard },
    { path: 'daily-tasks', component: DailyTasksComponent },
    { path: 'task-play/:taskId', component: TaskPlayComponent },
    { path: 'leaderboard', component: Leaderboard },
    { path: 'settings', children: settingsRoutes },
];