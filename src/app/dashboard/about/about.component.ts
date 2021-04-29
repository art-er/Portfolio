import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

class InfoGuard {
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }

}
