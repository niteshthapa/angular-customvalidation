import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidatonerrorService {

  constructor() { }
  rangeLengthText(validationValue: Array<number>) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < validationValue[0] && control.value.length !== 0 || control.value.length > validationValue[1] && control.value.length !== 0) {
        return { 'rangeLengthText': true, 'firstRange': validationValue[0], 'secondRange': validationValue[1] }
      }
    };
  }
  digit() {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(control)
      if (control.value.length !== 0) {
        let digitCheck = /^\d+$/.test(control.value)
        if (digitCheck) {
          return null;
        }
        else {
          return { 'digit': true }
        }
      }
    }
  };
  rangeLengthDigit(validationValue: Array<number>) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < validationValue[0] && control.value.length !== 0 || control.value.length > validationValue[1] && control.value.length !== 0) {
        return { 'rangeLengthDigit': true, 'firstRange': validationValue[0], 'secondRange': validationValue[1] }
      }

    };
  }
  minMaxValidation(validationValue: Array<number>) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value < validationValue[0] && control.value.length !== 0 || control.value > validationValue[1] && control.value.length !== 0) {
        return { 'minMaxLength': true, 'firstRange': validationValue[0], 'secondRange': validationValue[1] }
      }

    };
  }

  confirmEmailValidation(control: AbstractControl): { [key: string]: boolean } | null {
    const fvalue = control.get('fvalue');
    const svalue = control.get('svalue');
    if (fvalue.value != svalue.value && svalue.value.length !== 0) {
      return { 'misMatch': true }
    }
    else {
      return null
    }
  };

}
