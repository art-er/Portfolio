import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadGuard} from './dashboard/load.guard';

const routes: Routes = [
  {
    path: '',
    canLoad: [LoadGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(dashboardModule => dashboardModule.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // canLoad[LoadGuard]
})
export class AppRoutingModule { }
