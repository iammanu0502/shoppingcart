import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.bootstrap.css']
})
export class HomeComponent implements OnInit {

  public products: Prod[];
  constructor(private prserv:ProductService){}



  ngOnInit(): void {
    this.getProducts();
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
