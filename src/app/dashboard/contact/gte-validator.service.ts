import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable(
  {providedIn: 'root'}
)
export class GteValidatorService {
  gte(n: number): ValidatorFn {
    // validation logic

    return (control: AbstractControl):
      ValidationErrors | null => {
      console.log('gte model-driven form custom validator service: ', control.value);

      if (control.value == null) {
        return {gte: true, required: true};
      }

      if (control.value <= n) {
        return {gte: true, requiredValue: n};
      }

      return null;
    };
  }
}
