import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebWorkerPocRoutingModule } from './web-worker-poc-routing.module';
import { ImageCompressComponent } from './components/image-compress/image-compress.component';


@NgModule({
  declarations: [
    ImageCompressComponent
  ],
  imports: [
    CommonModule,
    WebWorkerPocRoutingModule
  ]
})
export class WebWorkerPocModule { }
