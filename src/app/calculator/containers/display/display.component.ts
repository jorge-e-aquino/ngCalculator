import { Component, OnInit, Input } from '@angular/core';

// consists of two fields which display the input and output text--gets this data from the calculator component
@Component({
  selector: 'app-display',
  template: `
    <div class="field" id="input">
      {{input}}
    </div>
    <div class="field" id="output">
      {{result}}
    </div>
  `,
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() input: string;
  @Input() result: string;

  constructor() { }

  ngOnInit(): void {
  }

}
