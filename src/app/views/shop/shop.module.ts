import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './shop-checkout/shop-checkout.component';
import { ShopWishlistComponent } from './shop-wishlist/shop-wishlist.component';


@NgModule({
  declarations: [
    ShopComponent,
    ShopDetailComponent,
    ShopCartComponent,
    ShopCheckoutComponent,
    ShopWishlistComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule { }
