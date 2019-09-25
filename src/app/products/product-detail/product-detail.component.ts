import { Component, OnInit } from '@angular/core';

export interface Color {
  value: string;
  viewValue: string;
}

export interface Size {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  colors: Color[] = [
    {value: 'black-0', viewValue: 'Black'},
    {value: 'grey-1', viewValue: 'Grey'},
    {value: 'blue-2', viewValue: 'Blue'}
  ];
  sizes: Size[] = [
    {value: 'small-0', viewValue: 'Small'},
    {value: 'medium-1', viewValue: 'Medium'},
    {value: 'large-2', viewValue: 'Large'},
    {value: 'xl-2', viewValue: 'Extra-Large'}
  ];
}
