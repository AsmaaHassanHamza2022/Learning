import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceProductPageRoutingModule } from './e-commerce-product-page-routing.module';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ECommerceNavbarComponent } from './components/e-commerce-navbar/e-commerce-navbar.component';
import { ProductImagesGallaryComponent } from './components/product-images-gallary/product-images-gallary.component';


@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    ECommerceNavbarComponent,
    ProductImagesGallaryComponent
  ],
  imports: [
    CommonModule,
    ECommerceProductPageRoutingModule
  ]
})
export class ECommerceProductPageModule { }
