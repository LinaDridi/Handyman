import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Handyman-front-end';
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
}
