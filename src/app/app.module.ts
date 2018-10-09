import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { DirModule } from './common/dir/dir.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModule, DirModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
