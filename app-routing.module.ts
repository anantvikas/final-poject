import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { ProductsComponent } from './products/products.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartlinkComponent } from './cartlink/cartlink.component';
const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path: 'main-component', component:MainComponentComponent},
  
  {path: 'footer', component:FooterComponent},
  {path:'cart',component:CartComponent},
  {path:'product-description',component:ProductDescriptionComponent},
  {path:'payment-options',component:PaymentOptionsComponent},
  {path:'place-order',component:PlaceOrderComponent},
  { path: '',   redirectTo: '/main-component', pathMatch: 'full' },
  {path:'shipping-detail',component:ShippingDetailComponent},
  {path:'cartlink',component:CartlinkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
