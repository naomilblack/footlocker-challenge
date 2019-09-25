import { Component, Input,  OnInit } from '@angular/core';

export interface Card {
  id: number;
  name: string;
  category: string;
  price: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() title: string;
  @Input() category: string;
  @Input() price: number;
  @Input() imageURL: string;
  @Input() addToCart: boolean;


  constructor() { }

  ngOnInit() {

  }
  cards: Card[] = [

  
    {id: 0, name: 'Awesome T- Shirt!', category: 'Men\'s', price: '40.00' },
    {id: 1, name: 'Awesome T- Shirt!', category: 'Men\'s', price: '40.00' },
    {id: 2, name: 'Awesome T- Shirt!', category: 'Men\'s', price: '40.00' },
    {id: 3, name: 'Awesome T- Shirt!', category: 'Men\'s', price: '40.00' },
    {id: 4, name: 'Awesome T- Shirt!', category: 'Men\'s', price: '40.00' },
    {id: 5, name: 'Awesome T- Shirt!', category: 'Men\'s', price: '40.00' },
  ];

  

}