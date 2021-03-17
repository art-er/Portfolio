import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  up = 'ux/ui';
  projects: any[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }
}
