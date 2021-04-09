import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../contact-exit.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements ComponentCanDeactivate {

  constructor() { }

  record = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  saved = false;

  // ngOnInit(): void {
  // }

  // tslint:disable-next-line:typedef
  SaveButtonClick() {
    console.log(this.record.value);
  }
  // tslint:disable-next-line:typedef
  save(){
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean>{

    if (!this.saved){
      return confirm('Вы хотите покинуть страницу?');
    }
    else{
      return true;
    }
  }
}
