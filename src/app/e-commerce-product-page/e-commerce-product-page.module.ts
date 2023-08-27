import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceProductPageRoutingModule } from './e-commerce-product-page-routing.module';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ECommerceNavbarComponent } from './components/e-commerce-navbar/e-commerce-navbar.component';
import { ProductImagesGallaryComponent } from './components/product-images-gallary/product-images-gallary.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CounterComponent } from './components/counter/counter.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    ECommerceNavbarComponent,
    ProductImagesGallaryComponent,
    ProductDetailsComponent,
    CounterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ECommerceProductPageRoutingModule
  ]
})
export class ECommerceProductPageModule { }
