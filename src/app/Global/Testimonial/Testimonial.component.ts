import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'embryo-Testimonial',
  templateUrl: './Testimonial.component.html',
  styleUrls: ['./Testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

   @Input() data: any;

   constructor() { }

   ngOnInit() {
   }

}
