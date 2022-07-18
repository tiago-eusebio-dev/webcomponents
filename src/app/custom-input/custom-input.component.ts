import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: `<input [type]="inputType" [placeholder]="placeholder" />`,
  styles: [
    `
      p {
        border: 1px solid blue;
      }
      p:hover {
        cursor: pointer;
        border: 1px solid blue;
      }
    `,
  ],
})
export class CustomInputComponent {
  @Input() inputType = 'text';
  @Input() placeholder = 'Insert text';
}
