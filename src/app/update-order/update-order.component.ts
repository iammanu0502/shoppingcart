import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderlist } from '../Order-list';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  id: number;
  order:Orderlist=new Orderlist();
  errors={emailId:false}

  constructor(private orderservice:OrderService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
     this.orderservice.getOrderById(this.id).subscribe(data => {
       this.order = data;
     }, error => console.log(error));
  }


  goToOrderlist() {
    this.router.navigate(['/order-list']);
  }

  validateemailId(){

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.emailId = !pattern.test(this.order.emailId);
    console.log(this.errors.emailId);
  }

  onSubmit(){
    this.orderservice.updateOrder(this.id, this.order).subscribe( data =>{
      this.goToOrderlist();
    }
    , error => console.log(error));
  }

}
