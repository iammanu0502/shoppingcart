import { Injectable } from '@angular/core';
import { Prod } from './prod';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  // productsList: Array<Prod>;
  // electronicProducts: Array<Prod>;
  // productsInCart: Array<any> = [];
  // constructor(
  //   private dataservice: ProductService,
  //   // private electronicservice: ProductService
  // ) {
  //   this.productsList = this.dataservice.getProducts();
  //   // this.electronicProducts = this.electronicservice.getProducts();
  // }

  // addProductToCart(id: number) {
  //   for (var i = 0; i < this.productsList.length; i++) {
  //     const productExistInCart = this.productsInCart.find(
  //       ({ id }) => id === this.productsList[i].id
  //     );
  //     if (productExistInCart) {
  //       if (this.productsInCart[i].id == id) {
  //         this.productsInCart[i].num++;
  //       }
  //       console.log(this.productsInCart[i]);
  //     } else if (this.productsList[i].id == id) {
  //       this.productsInCart.push({ ...this.productsList[i], num: 1 });
  //     }
  //   }
  // }

  // addElectronicsToCart(name: string) {
  //   for (var i = 0; i < this.electronicProducts.length; i++) {
  //     const productExistInCart = this.productsInCart.find(
  //       ({ name }) => name === this.electronicProducts[i].name
  //     );
  //     if (productExistInCart) {
  //       if (this.productsInCart[i].name == name) {
  //         this.productsInCart[i].num++;
  //       }
  //       console.log(this.productsInCart[i]);
  //     } else if (this.electronicProducts[i].name == name) {
  //       this.productsInCart.push({ ...this.electronicProducts[i], num: 1 });
  //     }
  //   }
  // }

  // getProductsInCart() {
  //   return this.productsInCart;
  // }

  // removeFromCart(name: string) {
  //   for (var i = 0; i < this.productsInCart.length; i++) {
  //     if (this.productsInCart[i].name == name) {
  //       this.productsInCart.splice(i, 1);
  //     }
  //   }
  // }
 }
