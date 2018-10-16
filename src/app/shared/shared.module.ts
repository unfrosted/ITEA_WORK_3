import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNextDivDirective, ClickableDirective } from './directives';

const componentsAndDirectives = [ClickableDirective, AddNextDivDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...componentsAndDirectives],
  exports: [...componentsAndDirectives]
})
export class SharedModule {}
