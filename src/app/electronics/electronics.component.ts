import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod } from '../prod';
import { ProductService } from '../product.service';
import { Signup } from '../Signup';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css','electronics.bootstrap.css']
})
export class ElectronicsComponent implements OnInit {

  public products: Prod[];
  public signup: Signup[];
  constructor(private prserv:ProductService, private signupservice:SignupService, private router:Router){}



  ngOnInit(): void {
    this.findByElectronics();
  }


  public searchProducts(key: string): void {
    console.log(key);
    const results: Prod[] = [];
    for (const product of this.products) {
      if (product.p_name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.p_seller.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.p_category.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.p_description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.p_price.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.findByElectronics();
    }
  }


  public findByElectronics(): void {
    this.prserv.findByElectronics().subscribe(
      (response: Prod[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  onsubmit(p_name: String, username: String, email_id: String)

   {


      this.signupservice.getUserdata(this.signupservice.signup.email_id, this.signupservice.signup.username).subscribe( data =>{
        const user=data;

        if(user?.firstName && user?.lastName)
    {
      const userName=user.firstName+' '+user.lastName;
      const emailId=user.emailId;



      this.router.navigate(['order'],
      {
        queryParams: { p_name,username,email_id }
       })

      }
        console.log(data);

      },
      error => {
        return console.log(error);
      });
    }


}



