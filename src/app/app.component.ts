import { Component } from '@angular/core';

// contains the router outlet which displays the calculator--path is '/calculator', displays to the browser
@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent  {
  constructor() {
    console.log('app constructed');
  }
}

// by Jorge Aquino 5/16/2021 jaquino7@gatech.edu https://aquino.design
