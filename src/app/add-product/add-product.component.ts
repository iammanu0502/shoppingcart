import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../add-product.service';
import { Addproduct } from '../add-product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Addproduct=new Addproduct();
  constructor(private addproductservice:AddProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  saveProduct() {
    this.addproductservice.createProduct(this.product).subscribe( data =>{
      console.log(data);
      this.goToProductlist();
    },
    error => {
      return console.log(error);
    });
  }
  goToProductlist() {
    this.router.navigate(['/product-list']);
  }

  onSubmit(){

    if(this.product.p_name && this.product.p_description && this.product.p_category && this.product.p_seller && this.product.p_price && this.product.image)
    {
      console.log(this.product);
      this.saveProduct();
    }
    else{
      alert("You missed your data.....below fields are required");
    }


  }
}
