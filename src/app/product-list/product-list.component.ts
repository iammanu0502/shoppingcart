import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productlist } from '../product-list';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productlist: Productlist[];
  constructor(private router: Router, private productlistservice:ProductListService) { }

  ngOnInit(): void {
    this.getproducts();
  }

  private getproducts(){
    this.productlistservice.getProductList().subscribe(data => {
      this.productlist = data;
    });
  }
  productDetails(id: number){
    this.router.navigate(['update-product', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
  }

  deleteProduct(id: number){
    this.productlistservice.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getproducts();
    })

  }
}
