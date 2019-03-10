import { Component, OnInit } from '@angular/core';

const order_history = [
   {position: 1, orderid: 1990, name: 'Shirt', price: 1500, status: 'Sent', action: ''},
   {position: 2, orderid: 1991, name: 'Jeans', price: 2000, status: 'In processing', action: ''},
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-OrderHistory',
  templateUrl: './OrderHistory.component.html',
  styleUrls: ['./OrderHistory.component.scss']
})
export class OrderHistoryComponent implements OnInit {

   displayedColumns: string[] = ['position', 'orderid', 'name', 'price', 'status', 'action'];
   dataSource = order_history;

   constructor() { }

   ngOnInit() {
   }

}
