import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-emailimput',
  templateUrl: './emailimput.component.html',
  styleUrls: ['./emailimput.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EmailimputComponent),
    multi: true
  }]
})
export class EmailimputComponent implements OnInit,ControlValueAccessor {

  value:string;
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
