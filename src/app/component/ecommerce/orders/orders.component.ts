import { Component } from '@angular/core';

export interface dataorders {
  orders: number;
  Company_Name: string;
  stauts: string;
  total: number;
  date: string;

}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  dataorders = [
    {
      orders: 264345,
      status: "fulfilled",
      total: 675,
      date: "june 12, 2022",
    },
    {
      orders: 264345,
      status: "Confirmed",
      total: 698,
      date: "june 12, 2022",
    },
    {
      orders: 264345,
      status: "Shipped",
      total: 156,
      date: "March 12, 2022",
    },
    {
      orders: 264345,
      status: "fulfilled",
      total: 367,
      date: "June 12, 2022",
    },
    {
      orders: 264345,
      status: "fulfilled",
      total: 452,
      date: "April 25, 2022",
    },
    {
      orders: 264345,
      status: "Confirmed",
      total: 842,
      date: "july 08, 2022",
    },
    {
      orders: 264345,
      status: "Shipped",
      total: 369,
      date: "May 01, 2022",
    },
    {
      orders: 264345,
      status: "fulfilled",
      total: 745,
      date: "may 12, 2022",
    },
  ];
}
