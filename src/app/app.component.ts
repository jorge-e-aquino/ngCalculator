import { Component } from '@angular/core';

// contains the display and number pad components and displays them to the browser and also contains some presentation logic
@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent  {
  constructor() {
    console.log("app constructed");
  }

}

// by Jorge Aquino 5/16/2021 jaquino7@gatech.edu https://aquino.design
