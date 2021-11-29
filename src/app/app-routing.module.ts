
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CartComponent } from './cart/cart.component';
import { ComputersLaptopsComponent } from './computers-laptops/computers-laptops.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

const routes: Routes = [
  {path: 'update-order/:id',component:UpdateOrderComponent},
  {path: 'user-list',component:UserListComponent},
  {path: 'add-product',component:AddProductComponent},
  {path: 'update-product/:id',component:UpdateProductComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'order-list',component:OrderListComponent},
  {path: 'order',component:OrderComponent},
{path: 'products',component:ProductsComponent},
{path: 'admin-panel',component:AdminPanelComponent},
{path: 'home',component:HomeComponent,data:{header:false}},
{path: 'login',component:LoginComponent},
{path: 'signup',component:SignupComponent},
// {path:'cart',component:CartComponent},
{path:'electronics',component:ElectronicsComponent},
{path:'mobiles',component:MobilesComponent},
{path:'computers-laptops',component:ComputersLaptopsComponent},
{path:'fashion',component:FashionComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings=[
  HomeComponent,
  LoginComponent,
  SignupComponent,
  // CartComponent,
  ElectronicsComponent,
  MobilesComponent,
  ComputersLaptopsComponent,
  FashionComponent,
  AdminPanelComponent,
  ProductsComponent,
  OrderComponent,
  OrderListComponent,
  ProductListComponent,
  UserListComponent,
  AddProductComponent,
  UpdateProductComponent,
  UpdateOrderComponent
]
