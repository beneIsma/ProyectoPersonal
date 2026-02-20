import {AbstractControl, ValidationErrors} from '@angular/forms';


export function validateEmail(control: AbstractControl): ValidationErrors | null {
  const email:string = control.value;
  if (!email) {
    return null;
  }
  const regex = /^[a-zA-Z0-9@._-]{3,}(@)(gmail|hotmail)(\.)(com|es)$/

  return regex.test(email) ? null : {checkEmail: true};
}
