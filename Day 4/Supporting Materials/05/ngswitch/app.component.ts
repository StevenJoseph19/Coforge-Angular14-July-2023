import { Component } from '@angular/core';

class item {
  name!: string;
  val!: number;
}

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'apm-new';
  items: item[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
  ];
  selectedValue: string = 'One';
}
