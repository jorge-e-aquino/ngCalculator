import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// handles the button generation and logic and passes data to the app root
@Component({
  selector: 'app-number-pad',
  template: `
    <app-button *ngFor="let key of keys" (click)="press(key.label, key.case)" [button]="key.label" [case]="key.case"></app-button>
  `,
  styleUrls: []
})
export class NumberPadComponent implements OnInit {
  keys: any[];
  formula: {input: string, result: string} = {
    input: '',
    result: ''
  };

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.keys = [
      {label: 'AC', case: 'all-clear'},
      {label: 'C', case: 'input-clear'},
      {label: 'ANS', case: 'ans'},

      {label: '+', case: 'operator'},
      {label: '-', case: 'operator'},
      {label: '*', case: 'operator'},
      {label: '/', case: 'operator'},

      {label: '1', case: 'key'},
      {label: '2', case: 'key'},
      {label: '3', case: 'key'},
      {label: '4', case: 'key'},
      {label: '5', case: 'key'},
      {label: '6', case: 'key'},
      {label: '7', case: 'key'},
      {label: '8', case: 'key'},
      {label: '9', case: 'key'},
      {label: '.', case: 'key'},
      {label: '0', case: 'key'},

      {label: '=', case: 'enter'}
    ];
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
        break;
      case 'all-clear':
        this.formula.input = (this.formula.input).substring(this.formula.input.length);
        this.formula.result = (this.formula.result).substring(this.formula.result.length);
        this.sendMessage();
        break;
      case 'input-clear':
        this.formula.input = (this.formula.input).substring(this.formula.input.length);
        this.sendMessage();
        break;
    }
  }

  enter(): void {
    try {
      // tslint:disable-next-line: no-eval
      this.formula.result += eval(this.formula.input);
      this.formula.input = (this.formula.input).substring(this.formula.input.length);
      this.sendMessage();
    } catch {
      console.log('Try again!');
    }
    this.formula.result = (this.formula.result).substring(this.formula.result.length);
  }

  sendMessage(): void {
    const json = JSON.stringify(this.formula);
    this.messageEvent.emit(json);
    console.log('send message json in numberpad', json);
  }

}
