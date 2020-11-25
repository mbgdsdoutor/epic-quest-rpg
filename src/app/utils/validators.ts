import { AbstractControl } from '@angular/forms';

export class EpicValidators {

  static get EMAIL() {
    return (control: AbstractControl) => {
      if (control.value && !control.value.match(/\S+@\S+\.\S+/)) {
        return { email: true };
      }
      return null;
    };
  }
  static get HORA() {
    return (control: AbstractControl) => {
      if (control.value && !control.value.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
        return { hora: true };
      }
      return null;
    };
  }
}
