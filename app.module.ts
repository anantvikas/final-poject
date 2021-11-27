import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { FilterPipe } from './pipefolder/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartlinkComponent } from './cartlink/cartlink.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductDescriptionComponent,
    MainComponentComponent,
    PaymentOptionsComponent,
    ShippingDetailComponent,
    PlaceOrderComponent,
    HomeFooterComponent,
    FilterPipe,
    CartlinkComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
