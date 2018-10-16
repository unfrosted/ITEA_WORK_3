import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNextDivDirective, ClickableDirective } from './directives';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

const componentsAndDirectives = [
  ClickableDirective,
  AddNextDivDirective,
  ProductFilterPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...componentsAndDirectives],
  exports: [...componentsAndDirectives]
})
export class SharedModule {}
