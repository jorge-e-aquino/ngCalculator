import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <div class="app centered">
    <app-display [input]="input" [result]="result"></app-display>
    <app-number-pad (messageEvent)="receiveMessage($event)"></app-number-pad>
  </div>
  `,
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  title = 'ngCalculator';
  json: string;
  parse: {input: string, result: string};
  input: string;
  result: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event): void {
    this.json = $event;
    this.parse = JSON.parse(this.json);
    this.input = this.parse.input;
    this.result = this.parse.result;
    console.log('receive message json in app', this.json, 'parsed:', this.parse);
  }

}
