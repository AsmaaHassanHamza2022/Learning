import { OwlOptions } from "ngx-owl-carousel-o";

export const OwlConfig:OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      " <img src='../../../assets/images/left-arrow.svg'/>",
      "<img src='../../../assets/images/right-arrow.svg'/>",
    ],
    stagePadding: 50, // show part of next slide 
    // animateIn:true, //no effect
    // animateOut:true, //no effect
    // center:true,   
    // merge:true,
    // dotsData:true,  //no effect
    // slideBy:'page',
    // URLhashListener:true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };