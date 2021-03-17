import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'project-detail/:projectUrl',
    component: ProjectDetailComponent
  },
  {
    path: 'project-contact',
    component: ContactComponent
  },
  {
    path: 'project-about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
