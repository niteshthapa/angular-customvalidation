import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator } from '@angular/forms';
import { ValidatonerrorService } from "./service/validatonerror.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customcontrolangular';
  isFormSubmit: boolean = false;
  profileForm: FormGroup
  constructor(private _validationErrorService: ValidatonerrorService) { }
  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      middleName: new FormControl('', [Validators.required, this._validationErrorService.rangeLengthText([2, 9])]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      age: new FormControl('', [Validators.required, this._validationErrorService.minMaxValidation([2, 15])]),
      email: new FormControl('', [Validators.required, Validators.email]),
      digit: new FormControl('', [Validators.required, this._validationErrorService.digit(), this._validationErrorService.rangeLengthText([2, 9])]),
      confirmEmailGroup: new FormGroup({
        fvalue: new FormControl('', Validators.required),
        svalue: new FormControl('', Validators.required),
      }, { validators: this._validationErrorService.confirmEmailValidation })
    });
  }
  controlName = (name) => {
    return this.isFormSubmit && this.profileForm.get(name);
  }
  controlGroup = () => {
    return this.profileForm.get('confirmEmailGroup');
  }
  disableControl() {
    this.profileForm.get('firstName').disable()
  }
  onSubmit() {
    this.isFormSubmit = true;
  }


}
