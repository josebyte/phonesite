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
      inStock: true,
      releaseDate: '2020-09-13T18:25:43.511Z'
    },
    {
      name: 'Mi Mix 4',
      brand: 'Xiaomi',
      screen: 6.67,
      price: 750,
      image: 'mix-4.jpg',
      offer: false,
      inStock: false,
      releaseDate: '2021-09-01T18:25:43.511Z'
    },
    {
      name: 'Galaxy S22',
      brand: 'Samsung',
      screen: 6.2,
      price: 675,
      image: 'galaxys-22.jpg',
      offer: true,
      inStock: true,
      releaseDate: '2021-01-14T18:25:43.511Z'
    }
  ];
}
