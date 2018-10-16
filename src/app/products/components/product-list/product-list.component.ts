import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<ProductModel>;
  productsP: Promise<Array<ProductModel>>;
  filterVal: string;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.products = this.productService.getProducts();
    // 1
    // this.productService.getProductsAsync().then(products =>
    //   this.products = products);
    // 2
    // this.getProducts();
    // 3
    this.productsP = this.productService.getProductsAsync();
  }

  async getProducts() {
    this.products = await this.productService.getProductsAsync();
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

  onInput(event: any): void {
    this.filterVal = event.target.value;
  }
}
