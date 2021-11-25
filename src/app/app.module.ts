import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { myRoutings } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupService } from './signup.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    myRoutings,
   AppComponent,
   HeaderComponent,
   FooterComponent,
   ProductsComponent,
   OrderComponent,
   OrderListComponent,
   ProductListComponent,
   UserListComponent,
   AddProductComponent,
   UpdateProductComponent,
   UpdateOrderComponent,


  ],
  exports:[HomeComponent],
  imports: [HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [SignupService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

