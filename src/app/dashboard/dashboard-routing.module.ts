import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ContactExitGuard} from './contact-exit.guard';
import {LoadGuard} from './load.guard';
import {InfoGuard} from './info.guard';
import {GteValidatorService} from './contact/gte-validator.service';

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
    component: ContactComponent,
    canDeactivate: [ContactExitGuard],
  },
  {
    path: 'project-about',
    component: AboutComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ContactExitGuard]
})
export class DashboardRoutingModule { }
