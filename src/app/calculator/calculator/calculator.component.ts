import { Component, OnInit } from '@angular/core';

// contains the display and number pad components, parses their data, and is sent to the router outlet to be displayed on the browser
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
    console.log('receive message json in calculator', this.json, 'parsed:', this.parse);
  }

}
