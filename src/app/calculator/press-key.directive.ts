import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPressKey]'
})
export class PressKeyDirective {
  method = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn): void {
    console.log('button', btn, 'number of clicks', this.method++);
  }

}
