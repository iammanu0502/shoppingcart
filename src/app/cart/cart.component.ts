import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList: Array<any>;
  bill: number = 0;

  constructor(private cartService: CartserviceService) { }

  ngOnInit(): void {
  //   this.productList = this.cartService.getProductsInCart();
  //   for (var i = 0; i < this.productList.length; i++) {
  //     this.bill += this.productList[i].num * this.productList[i].price;
  //   }
  // }

  // remove(name: string) {
  //   this.cartService.removeFromCart(name);
  // }
}
}

