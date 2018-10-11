import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // private serverData = { id: 2, name: 'Батон' } as ProductModel;
  product: ProductModel;

  constructor() {}

  ngOnInit() {
    this.product = new ProductModel(1, 'Хлеб');
    // this.product = this.serverData;
  }
}
