import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  items: any[] = [
    {
      picture: 'assets/img/orders/chair3.png',
      discount:'-10%',
      name: 'Chair',
      sales: 168,
      rate: '348 $',
      rating: 'assets/img/orders/star6.png',
    },
    {
      picture: 'assets/img/orders/bench.png',
      discount:'-20%',
      name: 'Wooden Bench',
      sales: 543,  
      rating: 'assets/img/orders/star6.png',
      rate: '348 $'
    },
    {
      name: 'Dressing Table',
      picture: 'assets/img/orders/mirror.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: 'Bar Table',
      picture: 'assets/img/orders/table.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: 'Fabric Armchair Soft Cushion',
      picture: 'assets/img/orders/hussian.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: ' Vintage Wooden Chair',
      picture: 'assets/img/orders/table2.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: 'Modern Green Chair',
      picture: 'assets/img/orders/chair4.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: ' Comfort Furniture Commode',
      picture: 'assets/img/orders/chair5.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: 'Retro Wooden Furniture',
      picture: 'assets/img/orders/table3.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    {
      name: 'Blue Fabric Armchair',
      picture: 'assets/img/orders/chair6.png',
      rating: 'assets/img/orders/star6.png',
      discount:'-20%',
      sales: 543,  
      rate: '348 $'
    },
    // Add more items as needed
  ];
}
