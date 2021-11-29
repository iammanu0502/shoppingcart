import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productlist } from '../product-list';
import { ProductListService } from '../product-list.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['p_name','p_description','p_seller', 'p_category','p_price','actions','action1'];
  dataSource: MatTableDataSource<Productlist>;

  productlist: Productlist[];
  constructor(private router: Router, private productlistservice:ProductListService) { }

  ngOnInit(): void {
    this.getproducts();
  }

  productDetails(id: number){
    this.router.navigate(['update-product', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
  }

  back(){
    this.router.navigate(['/products']);
  }

  orderlist(){
    this.router.navigate(['/order-list']);
  }

  userlist(){
    this.router.navigate(['/user-list']);
  }


  private getproducts(){
    this.productlistservice.getProductList().subscribe(data => {
      this.productlist = data;
      this.dataSource = new MatTableDataSource(this.productlist);

    });
  }


  deleteProduct(id: number){
    this.productlistservice.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getproducts();
    })

  }
}
