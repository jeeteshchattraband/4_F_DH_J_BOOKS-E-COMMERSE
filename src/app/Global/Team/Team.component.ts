import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'embryo-Team',
  templateUrl: './Team.component.html',
  styleUrls: ['./Team.component.scss']
})
export class TeamComponent implements OnInit {

   @Input() data: any;

   constructor() { }

   ngOnInit() {
   }

}
