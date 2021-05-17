import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './containers/display/display.component';
import { ButtonComponent } from './containers/button/button.component';
import { NumberPadComponent } from './containers/number-pad/number-pad.component';
import { PressKeyDirective } from './press-key.directive';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [DisplayComponent, ButtonComponent, NumberPadComponent, PressKeyDirective, CalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
