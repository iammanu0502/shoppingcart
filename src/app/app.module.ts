import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { myRoutings } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupService } from './signup.service';


@NgModule({
  declarations: [
    myRoutings,
   AppComponent,
   HeaderComponent,
   FooterComponent,

  ],
  exports:[HomeComponent],
  imports: [HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SignupService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

