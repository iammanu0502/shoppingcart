import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css','electronics.bootstrap.css']
})
export class ElectronicsComponent implements OnInit {

  public products: Prod[];
  constructor(private prserv:ProductService){}



  ngOnInit(): void {
    this.findByCategory();
  }

  public findByCategory(): void {
    this.prserv.findByCategory().subscribe(
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
