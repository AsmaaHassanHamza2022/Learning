import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { OwlConfig } from '../carousel.config';
import { OwlService } from '../owl.service';

@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
  ],
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent {
  public items: string[] = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
  ];
  customOptions: OwlOptions = { ...this.owlService.initalConfig };
  constructor(private owlService: OwlService) {
    // this.customOptions = this.owlService.updateConfig({
    //   rtl: true,
    //   navText: [
    //     "<img src='../../../assets/images/right-arrow.svg'/>",
    //     " <img src='../../../assets/images/left-arrow.svg'/>",
    //   ],
    // });
    this.customOptions=this.owlService.getArabicOwl();
  }
}
