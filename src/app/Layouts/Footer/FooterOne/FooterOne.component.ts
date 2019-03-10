import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItems } from '../../../Core/menu/menu-items/menu-items';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'FooterOne',
  templateUrl: './FooterOne.component.html',
  styleUrls: ['./FooterOne.component.scss']
})
export class FooterOneComponent implements OnInit {

   constructor(public menuItems: MenuItems,
               public translate: TranslateService) { }

   ngOnInit() {
   }

}
