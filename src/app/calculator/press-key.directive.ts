import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPressKey]'
})
export class PressKeyDirective {
  clicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn): void {
    console.log('press-key directive: button' + btn.innerHTML + '// number of clicks:', this.clicks++);
  }

}
