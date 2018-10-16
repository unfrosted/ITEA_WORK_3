import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { MessageComponent } from './common/components/message/message.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MessageComponent],
  imports: [BrowserModule, ProductsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
