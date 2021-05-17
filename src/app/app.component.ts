import { Component } from '@angular/core';

// contains the display and number pad components and displays them to the browser and also contains some presentation logic
@Component({
  selector: 'app-root',
  template: `
  <div class="app centered">
    <app-display [input]="input" [result]="result"></app-display>
    <app-number-pad (messageEvent)="receiveMessage($event)"></app-number-pad>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ngCalculator';
  json: string;
  parse: {input: string, result: string};
  input: string;
  result: string;

  constructor() {
    console.log(this.json);
  }

  receiveMessage($event): void {
    this.json = $event;
    this.parse = JSON.parse(this.json);
    this.input = this.parse.input;
    this.result = this.parse.result;
    console.log('receive message json in app', this.json, 'parsed:', this.parse);
  }
}

// by Jorge Aquino 5/16/2021 jaquino7@gatech.edu https://aquino.design
