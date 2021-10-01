import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextinputComponent } from './layout/textinput/textinput.component';
import { ValidationErrorComponent } from './layout/validation-error/validation-error.component';
import { NumberinputComponent } from './layout/numberinput/numberinput.component';
import { EmailimputComponent } from './layout/emailimput/emailimput.component';
import { DigitComponent } from './layout/digit/digit.component';

@NgModule({
  declarations: [
    AppComponent,
    TextinputComponent,
    ValidationErrorComponent,
    NumberinputComponent,
    EmailimputComponent,
    DigitComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
