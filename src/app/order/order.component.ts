import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from './order';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers : [OrderService]
})
export class OrderComponent implements OnInit {
  errors={ emailId:false};
  order:Order=new Order();
  constructor(private orderservice:OrderService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((data)=>{                     ////queryparams
      this.order.productName=data.productName;
      this.order.userName=data.userName;
      this.order.emailId=data.emailId;
    })
  }



  saveBuynow() {
    this.orderservice.createOrder(this.order).subscribe( data =>{
      console.log(data);
      this.goToElectronics();
    },
    error => {
      return console.log(error);
    });
  }
  goToElectronics() {
    this.router.navigate(['/electronics']);
  }



  onSubmit(){

    if(this.order.productName && this.order.userName && this.order.emailId&& this.order.phoneNumber && this.order.address && this.order.state && this.order.city && this.order.zipCode )
    {
      console.log(this.order);
      this.saveBuynow();
    }
    else{
      alert("You missed your data.....below fields are required");
    }
      // console.log(this.Buynow);
      // this.saveBuynow();

  }
    // console.log(this.student);
    // this.saveStudent();
    validateemailId(){

      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

       this.errors.emailId = !pattern.test(this.order.emailId);
      console.log(this.errors.emailId);
    }
}
