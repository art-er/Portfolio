import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function gte(n: number): ValidatorFn {

  return (control: AbstractControl):
                ValidationErrors | null => {
    console.log('gte model-driven form custom validator: ', control.value);

    if (control.value == null) {
      return {gte: true, required: true};
    }

    if (control.value <= n) {
      return {gte: true, requiredValue: n};
    }

    return null;
  };
}
