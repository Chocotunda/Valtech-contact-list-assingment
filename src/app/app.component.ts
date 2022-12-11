import { Component } from '@angular/core';
import config from '../../configuration.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = config.title;
}
