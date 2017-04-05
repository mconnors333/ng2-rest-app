import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent {
  myColor = 'blue';
  colors = [
    'blue',
    'red',
    'tomato',
    'maroon',
    'papayawhip'
  ]
  setColor(color) {
    this.myColor = color;
  }
}
