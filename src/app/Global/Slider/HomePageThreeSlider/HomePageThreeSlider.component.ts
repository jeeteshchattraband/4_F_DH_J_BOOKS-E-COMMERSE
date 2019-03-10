import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'embryo-HomePageThreeSlider',
  templateUrl: './HomePageThreeSlider.component.html',
  styleUrls: ['./HomePageThreeSlider.component.scss']
})
export class HomePageThreeSliderComponent implements OnInit, OnChanges {

   @Input() isRTL = false;

   slideConfig: any;

   slides: any = [
      {
         img         : 'assets/images/h-slider-1.jpg',
         content     : '2019 Latest Collection',
         heading_one : 'New Books Collection',
      },
      {
         img         : 'assets/images/h-slider-2.jpg',
         content     : '2019 Latest Collection',
         heading_one : 'Summer Time Collection',

      },
      {
         img         : 'assets/images/h-slider-3.jpg',
         content     : '2019 Latest Collection',
         heading_one : 'Gadgets Books',

      }
   ];

   constructor() { }

   ngOnInit() {
   }

   ngOnChanges() {
      this.slideConfig = {
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: false,
         rtl: this.isRTL,
         responsive: [
            {
               breakpoint: 991,
               settings: {
                  arrows: false,
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
