import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import {ButtonHoverDirective} from '../directives/button-hover.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    ProjectDetailComponent,
    ContactComponent,
    AboutComponent,
    ButtonHoverDirective],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
