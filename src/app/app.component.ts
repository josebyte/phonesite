import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PhoneSite';
  phone = {
    name: 'Iphone 13 mini',
    brand: 'Apple',
    screen: 5.42,
    price: 809
  };
}
