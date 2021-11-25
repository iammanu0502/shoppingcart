import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-computers-laptops',
  templateUrl: './computers-laptops.component.html',
  styleUrls: ['./computers-laptops.component.css','./cl.bootstrap.css']
})
export class ComputersLaptopsComponent implements OnInit {

  public products: Prod[];
  constructor(private prserv:ProductService){}



  ngOnInit(): void {
    this.findByComputers();
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
      this.findByComputers();
    }
  }

  public findByComputers(): void {
    this.prserv.findByComputers().subscribe(
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
