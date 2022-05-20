import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pictures: OwlOptions = {
    loop: true,
    fluidSpeed: true,
    autoplay: true,
    autoplayTimeout: 2800,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    margin: 40,
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      }
    },
    nav: false
  }


  // videos: OwlOptions = {
  //   autoplay: true,
  //   autoplayMouseleaveTimeout: 10,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     740: {
  //       items: 2,
  //     },
  //     940: {
  //       items: 2,
  //     }
  //   },
  //   nav: false
  // }

}