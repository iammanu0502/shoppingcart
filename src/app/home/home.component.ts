import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod } from '../prod';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.bootstrap.css']
})
export class HomeComponent implements OnInit {

  public products: Prod[];
  constructor(private prserv:ProductService, private router:Router){}



  ngOnInit(): void {
    this.getProducts();
  }


  public register(){
    alert('please register')
    this.router.navigate(['/signup']);
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
      this.getProducts();
    }
  }




  public getProducts(): void {
    this.prserv.getProducts().subscribe(
      (response: Prod[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
