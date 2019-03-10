import { Component, OnInit, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'embryo-MissionVision',
  templateUrl: './MissionVision.component.html',
  styleUrls: ['./MissionVision.component.scss']
})
export class MissionVisionComponent implements OnInit {

   @Input() data: any;
   constructor() { }

   ngOnInit() {
   }

}
