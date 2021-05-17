import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../contact-exit.guard';
import {GteValidatorService} from './gte-validator.service';
import {gte} from "./gte.validator";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements ComponentCanDeactivate, OnInit {

  constructor(private gteValidatorService: GteValidatorService) { }
  personForm: FormGroup;

  ngOnInit(): void {
    this.personForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [ Validators.email, this.gteValidatorService.gte(10)]),
    });
  }

  get email() {
    return this.personForm.get('email');
  }

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
