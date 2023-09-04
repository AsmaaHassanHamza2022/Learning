import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';

const routes: Routes = [
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
  // {
  //   path:'test',
  //   component:Test1Component
  // },
  {
    path:'test2',
    component:Test2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
