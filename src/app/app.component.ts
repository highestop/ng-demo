import { Component } from '@angular/core';
import { foo } from '../demo/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'NG-Demo';
  constructor() {
    console.log(foo());
  }
}
