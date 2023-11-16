import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingPocRoutingModule } from './routing-poc-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test3Component } from './test3/test3.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    Test1Component,
    Test3Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    RoutingPocRoutingModule
  ]
})
export class RoutingPocModule { }
