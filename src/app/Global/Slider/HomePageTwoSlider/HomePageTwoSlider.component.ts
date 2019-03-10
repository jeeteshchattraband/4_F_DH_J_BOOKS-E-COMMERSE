import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
   // tslint:disable-next-line:component-selector
   selector: 'embryo-HomePageTwoSlider',
   templateUrl: './HomePageTwoSlider.component.html',
   styleUrls: ['./HomePageTwoSlider.component.scss']
})
export class HomePageTwoSliderComponent implements OnInit, OnChanges {

   @Input() isRTL: any;

   slideConfig: any;

   slides = [
      {
         img: 'assets/images/home2-slider-1.jpg',
// tslint:disable-next-line:max-line-length
content: '<h4>New Arrival</h4><h1 class=\'text-main\'>Biggest Sale</h1><h1 class=\'text-bold mb-4\'>50% <sup class=\'bold-sup\'>Flat Off</sup></h1>'
      },
      {
         img: 'assets/images/home2-slider-2.jpg',
// tslint:disable-next-line:max-line-length
content: '<h4>School Books</h4><h1 class=\'text-main\'>Summer Sale </h1><h1 class=\'text-bold mb-4\'>40% <sup class=\'bold-sup\'>Off</sup></h1>'
      },
      {
         img: 'assets/images/home2-slider-3.jpg',
         // tslint:disable-next-line:max-line-length
        // content: '<h1 class=\'text-main\'></h1><h1 class=\'text-bold mb-4\'> <sup class=\'bold-sup\'></sup></h1>'
      },
      {
         img: 'assets/images/home2-slider-4.jpg',
         // tslint:disable-next-line:max-line-length
         content: '<h4>Comics</h4><h1 class=\'text-main\'>Weekly Offer</h1><h1 class=\'text-bold mb-4\'>30% <sup class=\'bold-sup\'>Off</sup></h1>'
      },
      {
         img: 'assets/images/home2-slider-6.jpg',
         // tslint:disable-next-line:max-line-length
         content: '<h4>E-Books</h4><h1 class=\'text-main\'>Smart Offer</h1><h1 class=\'text-bold mb-4\'>40% <sup class=\'bold-sup\'>Flat Off</sup></h1>'
      }
   ];

   constructor() { }

   ngOnInit() {
   }

   ngOnChanges() {
      this.slideConfig = {
         infinite: true,
         centerMode: true,
         centerPadding: '400px',
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: false,
         rtl: this.isRTL,
         responsive: [
            {
               breakpoint: 1400,
               settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '300px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 1199,
               settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '150px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 899,
               settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '75px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 768,
               settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 480,
               settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            }
         ]
      };
   }

}
