import { Component, EventEmitter, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;

  @Output()
  buy: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {}

  ngOnInit() {}

  onBuy(event: any) {
    console.log(`Товар куплен ${this.product.name}`);
    console.log(event);
    this.buy.emit(this.product);
  }
 
}
