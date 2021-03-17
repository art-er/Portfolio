import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  steps = ['1. Storyboard ', '2. Define ', '3. Ideate ', '4. Select ', '5. Prototype '];
  projectUrl: string;

  projects: any[];
  foundProject: any;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectUrl = this.route.snapshot.paramMap.get('projectUrl');
    this.getProjectByUrl();
  }

  getProjectByUrl(): void {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;

      for (const project of this.projects) {
        if (project.url === this.projectUrl) {
          this.foundProject = project;
        }
      }
      console.log('getProjectByUrl', this.projectUrl, this.foundProject);
    });
  }
}
