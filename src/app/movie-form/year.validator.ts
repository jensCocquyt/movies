import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function yearValidator(notBefore: number = 1900): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return !control?.value || control.value >= notBefore
      ? null
      : { year: { value: notBefore } };
  };
}
