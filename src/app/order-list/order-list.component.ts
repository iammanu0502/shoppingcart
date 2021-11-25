import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orderlist } from '../Order-list';
import { OrderListService } from '../order-list.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderlist: Orderlist[];
  displayedColumns: string[] = ['productName','userName','emailId','phoneNumber','address','orderDate','state','city','zipCode','actions','action1'];
  dataSource: MatTableDataSource<Orderlist>;
  constructor(private router: Router, private orderlistservice:OrderListService) { }

  ngOnInit(): void
  {
    this.getorders();
  }
  private getorders(){
    this.orderlistservice.getOrderList().subscribe(data => {
      this.orderlist = data;
      this.dataSource = new MatTableDataSource(this.orderlist);
    });
  }


  orderDetails(id: number){
    this.router.navigate(['orders', id]);
  }

  updateOrder(id: number){
    this.router.navigate(['update-order', id]);
  }

  deleteOrder(id: number){
    this.orderlistservice.deleteOrder(id).subscribe( data => {
      console.log(data);
      this.getorders();
    })

  }

}
