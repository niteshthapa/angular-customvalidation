import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberinputComponent),
    multi: true
  }]
})
export class NumberinputComponent implements OnInit,ControlValueAccessor {

  value:number;
@Input() label:string;
onChange:(e) =>void;
onTouched:() =>void;
  onDisabled:boolean;
  constructor() { }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
   this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.onDisabled = isDisabled
  }

  ngOnInit(): void {
    console.log(this.label)
  }


}
