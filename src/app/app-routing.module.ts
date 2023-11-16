import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'web-worker',
  //   pathMatch:'full'
  // },
  // {
  //   path:'web-worker',
  //   loadChildren:()=>import('./web-worker-poc/web-worker-poc.module').then((m)=>m.WebWorkerPocModule),
  // }
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

  {
    path:'',
    redirectTo:'router-poc',
    pathMatch:'full'
  },
  {
    path: 'router-poc',
    loadChildren:()=>import(
      './routing-poc/routing-poc.module'
    ).then((m) => m.RoutingPocModule) ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
