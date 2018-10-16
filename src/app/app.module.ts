import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { MessageComponent } from './common/components/message/message.component';
import { SharedModule } from './shared/shared.module';
import { S1Service } from './shared/services/s1.service';
import { S2Service } from './shared/services/s2.service';

@NgModule({
  declarations: [AppComponent, MessageComponent],
  imports: [BrowserModule, ProductsModule, SharedModule],
  providers: [
    // S1Service,
    S2Service,
    { provide: S1Service, useClass: S2Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
