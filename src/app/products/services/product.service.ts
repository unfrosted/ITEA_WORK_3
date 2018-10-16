import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Абрикос', capacity: 10, isAvailable: true },
    {
      id: 2,
      name: 'Банан',
      capacity: 20,
      isAvailable: true,
      description: 'Очень вкусный',
      price: 35,
      cdate: '2018-10-16'
    },
    { id: 3, name: 'Виноград', capacity: 30, isAvailable: true },
    { id: 4, name: 'Грейпфрут', capacity: 40, isAvailable: true },
    { id: 5, name: 'Дыня', capacity: 0, isAvailable: false }
  ];

  getProducts(): Array<ProductModel> {
    return this.products;
  }

  getProductsAsync(): Promise<Array<ProductModel>> {
    return Promise.resolve(this.products);
  }
}
