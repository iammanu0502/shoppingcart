
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComputersLaptopsComponent } from './computers-laptops/computers-laptops.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 
{path: 'home',component:HomeComponent,data:{header:false}},
{path: 'login',component:LoginComponent},
{path: 'signup',component:SignupComponent},
{path:'cart',component:CartComponent},
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
  CartComponent,
  ElectronicsComponent,
  MobilesComponent,
  ComputersLaptopsComponent,
  FashionComponent
]