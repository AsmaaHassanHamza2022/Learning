import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product-page',
    pathMatch:'full'
  },
  {
    path: 'product-page',
    loadChildren:()=>import(
      './e-commerce-product-page/e-commerce-product-page.module'
    ).then((m) => m.ECommerceProductPageModule) ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
