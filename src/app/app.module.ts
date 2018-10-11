import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { MessageComponent } from './common/components/message/message.component';

@NgModule({
  declarations: [AppComponent, MessageComponent],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
