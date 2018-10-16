import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!Array.isArray(value)) {
      return value;
    }

    if (!args) {
      return value;
    }
    return value.filter((p: ProductModel) =>
      p.name.toUpperCase().startsWith(args.toUpperCase())
    );
  }
}
