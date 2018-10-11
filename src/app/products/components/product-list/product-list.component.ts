import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor() {
    this.products = [
      { id: 1, name: 'Абрикос' },
      { id: 2, name: 'Банан', description: 'Очень вкусный' },
      { id: 3, name: 'Виноград' },
      { id: 4, name: 'Грейпфрут' },
      { id: 5, name: 'Дыня' }
    ];
  }

  ngOnInit() {}
}
