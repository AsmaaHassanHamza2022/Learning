import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Test1Component } from './components/test1/test1.component';

const routes: Routes = [
  // {path:'test',component:Test1Component}
  // {
  //   path:'',
  //   redirectTo:'product-page',
  //   pathMatch:'full'
  // },
  // {
  //   path: 'product-page',
  //   loadChildren:()=>import(
  //     './e-commerce-product-page/e-commerce-product-page.module'
  //   ).then((m) => m.ECommerceProductPageModule) ,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
