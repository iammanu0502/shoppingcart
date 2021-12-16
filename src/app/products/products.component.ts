import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod } from '../prod';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Prod[];
  constructor(private prserv:ProductService, private router:Router) { }

  ngOnInit() {
    this.getProducts();
  }

  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
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


