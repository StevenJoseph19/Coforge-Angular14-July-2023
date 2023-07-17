import {
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  ViewChild,
  ViewChildren,
  HostListener,
  Pipe,
  Inject,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: ` <h1>Hello {{ name }}!</h1> `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent {
  @Input()
  name!: string;
}
