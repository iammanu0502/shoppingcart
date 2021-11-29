import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../add-product.service';
import { Updateproduct } from '../update-product';
import { UpdateProductService } from '../update-product.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  product:Updateproduct=new Updateproduct();
  constructor(private updateservice:UpdateProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
     this.updateservice.getProductById(this.id).subscribe(data => {
       this.product = data;
     }, error => console.log(error));
  }



  goToProductlist() {
    this.router.navigate(['/product-list']);
  }

  onSubmit(){
    this.updateservice.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToProductlist();
    }
    , error => console.log(error));
  }


  back(){
    this.router.navigate(['/product-list']);
  }

}
