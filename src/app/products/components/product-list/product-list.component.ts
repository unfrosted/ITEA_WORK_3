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
      { id: 1, name: 'Абрикос', capacity: 10 },
      { id: 2, name: 'Банан', capacity: 20, description: 'Очень вкусный' },
      { id: 3, name: 'Виноград', capacity: 30 },
      { id: 4, name: 'Грейпфрут', capacity: 40 },
      { id: 5, name: 'Дыня', capacity: 50 }
    ];
  }

  ngOnInit() {}

  onBuy(product: ProductModel): void {
    console.log(`[ProductListComponent]: ${product.name}`);

    const idx = this.products.findIndex(p => p.id === product.id);
    if (idx !== -1) {
      if (this.products[idx].capacity > 0) {
        this.products[idx].capacity--;
      }
    }
  }
}
