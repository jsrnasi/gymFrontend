import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './shop-checkout/shop-checkout.component';

const routes: Routes = [
  {
    path:'',
    component:ShopComponent,
  },
  {
    path:'product-detail',
    component:ShopDetailComponent
  },
  {
    path:'shop-cart',
    component:ShopCartComponent
  },
  {
    path:'shop-checkout',
    component:ShopCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
