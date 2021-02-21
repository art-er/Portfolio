import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProjectDetailComponent,
    ContactComponent,
    AboutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
