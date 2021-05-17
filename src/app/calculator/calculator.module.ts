import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './containers/display/display.component';
import { ButtonComponent } from './containers/button/button.component';
import { NumberPadComponent } from './containers/number-pad/number-pad.component';
import { PressKeyDirective } from './press-key.directive';

@NgModule({
  declarations: [DisplayComponent, ButtonComponent, NumberPadComponent, PressKeyDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayComponent,
    NumberPadComponent
  ]
})
export class CalculatorModule { }
