import { Component, DoCheck, Input, OnInit } from '@angular/core';
@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit, DoCheck {
  @Input() controls!: any;
  @Input() group!: any;
  error: any;
  constructor() { }
  ngOnInit(): void {
  }
  ngDoCheck() {
    console.log(this.controls);
    console.log(this.group);
    this.error = {
      required: 'This field is required',
      email: 'Email is not valid',
      minlength: `Minimum ${this.controls.errors?.minlength?.requiredLength} is required`,
      maxLength: `Maximum ${this.controls.errors?.maxlength?.requiredLength} is required`,
      maxValue: `Maximum ${this.controls.errors?.max?.max} is required`,
      minValue: `Minimum ${this.controls.errors?.min?.min} is required`,
      minMax: `Number between ${this.controls.errors?.firstRange} and   ${this.controls.errors?.secondRange} is allowed`,
      rangeLengthText: `Minimum  ${this.controls.errors?.firstRange} and maximum ${this.controls.errors?.secondRange} character is required`,
      rangeLengthDigit: `Please enter between  ${this.controls.errors?.firstRange} and  ${this.controls.errors?.secondRange}`,
      digit: `Please enter digit only`,
      confirmText: 'Both value does not match',
    };
  }
}
