import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  steps = ['1. Storyboard ', '2. Define ', '3. Ideate ', '4. Select ', '5. Prototype '];

  constructor() { }

  ngOnInit(): void {
  }

}
