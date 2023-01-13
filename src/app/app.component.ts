import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PhoneSite';
  phones = [
    {
      name: 'Iphone 13 mini',
      brand: 'Apple',
      screen: 5.4,
      price: 809,
      image: 'iphone-13-mini.jpg',
      offer: false,
      inStock: true
    },
    {
      name: 'Mi Mix 4',
      brand: 'Xiaomi',
      screen: 6.67,
      price: 750,
      image: 'mix-4.jpg',
      offer: false,
      inStock: false
    },
    {
      name: 'Galaxy S22',
      brand: 'Samsung',
      screen: 6.2,
      price: 675,
      image: 'galaxys-22.jpg',
      offer: true,
      inStock: true
    }
  ];
}
