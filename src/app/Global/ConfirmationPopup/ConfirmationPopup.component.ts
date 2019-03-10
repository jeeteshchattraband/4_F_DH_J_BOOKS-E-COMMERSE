import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ConfirmationPopup',
  templateUrl: './ConfirmationPopup.component.html',
  styleUrls: ['./ConfirmationPopup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

   message: string;
   constructor(public dialogRef: MatDialogRef<ConfirmationPopupComponent>) { }

   ngOnInit() {
   }

}
