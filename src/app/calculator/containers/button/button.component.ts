import { Component, OnInit, Input } from '@angular/core';

// contains the basic presentation logic for a button
@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="{'operator': case === 'operator', 'all-clear': case === 'all-clear', 'input-clear': case === 'input-clear', 'enter': case === 'enter', 'ans': case === 'ans'}" appPressKey>
      {{button}}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() button: string;
  @Input() case: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.button, this.case);
  }

}

