import { Component } from '@angular/core';
import { products } from '../interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: products[] = [
    {
      name: 'Apple Flavor',
      description: 'Experience the crisp and refreshing taste of our Apple flavor energy drink.',
      availability: 'In Stock',
      price: 2.99,

    },
    // {
    //   name: 'Strawberry Flavor',
    //   description: 'Indulge in the sweet and tangy taste of our Strawberry flavor energy drink.',
    //   availability: 'In Stock',
    //   price: 2.99,
    // },
    // {
    //   name: 'Pineapple Flavor',
    //   description: 'Escape to the tropics with the tropical burst of flavor in our Pineapple flavor energy drink.',
    //   availability: 'In Stock',
    //   price: 2.99,
    // },
  ];

}
