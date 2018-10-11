import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<ProductModel>;

  ngOnInit() {
    console.log(`[ngOnInit]`);
    this.products = [
      { id: 1, name: 'Абрикос', capacity: 10, isAvailable: true },
      {
        id: 2,
        name: 'Банан',
        capacity: 20,
        isAvailable: true,
        description: 'Очень вкусный'
      },
      { id: 3, name: 'Виноград', capacity: 30, isAvailable: true },
      { id: 4, name: 'Грейпфрут', capacity: 40, isAvailable: true },
      { id: 5, name: 'Дыня', capacity: 0, isAvailable: false }
    ];
  }

  ngOnDestroy() {
    console.log(`[ngOnDestroy]`);
    this.products.length = 0;
  }

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
