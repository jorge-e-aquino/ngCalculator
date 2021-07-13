import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import KEYS from './keys';

// handles the button generation and logic and passes data to the app root
@Component({
  selector: 'app-number-pad',
  template: `
    <app-button *ngFor="let key of keys" (click)="press(key.label, key.case)" [button]="key.label" [case]="key.case"></app-button>
  `,
  styleUrls: []
})
export class NumberPadComponent implements OnInit {
  keys: {label: string, case: string}[];
  formula: {input: string, result: string} = {
    input: '',
    result: ''
  };

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.keys = KEYS;
  }

  press(button: string, aCase: string): void {
    switch (aCase) {
      case 'key':
        this.formula.input += button;
        this.sendMessage();
        console.log(button, 'pressed =>', this.formula.input);
        break;
      case 'operator':
        this.formula.input += button;
        this.sendMessage();
        console.log(button, 'operator pressed =>', this.formula.input);
        break;
      case 'enter':
        console.log('entering...', this.formula.input);
        this.enter();
        console.log('CALCULATION DONE \n************************************\n************************************');
        break;
      case 'all-clear':
        this.formula.input = (this.formula.input).substring(this.formula.input.length);
        this.formula.result = (this.formula.result).substring(this.formula.result.length);
        console.log('ALL cleared');
        this.sendMessage();
        break;
      case 'input-clear':
        this.formula.input = (this.formula.input).substring(this.formula.input.length);
        console.log('input cleared');
        this.sendMessage();
        break;
    }
  }

  enter(): void {
    try {
      this.formula.result = (this.formula.result).substring(this.formula.result.length);
      // tslint:disable-next-line: no-eval
      this.formula.result += (+eval(this.formula.input).toFixed(2)).toString();
      this.formula.input = (this.formula.input).substring(this.formula.input.length);
      this.sendMessage();
    } catch {
      console.log('Try again!');
    }
  }

  sendMessage(): void {
    const json = JSON.stringify(this.formula);
    this.messageEvent.emit(json);
    console.log('send message json in numberpad, stringified as:', json);
  }
}
