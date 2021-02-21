import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  record = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  SaveButtonClick() {
    console.log(this.record.value);
  }

}
