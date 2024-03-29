import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { AdminPanelService } from '../admin-panel.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Adminpanel } from '../Admin-panel';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers : [AdminPanelService]
})
export class AdminPanelComponent implements OnInit {

  errors={email_id:false}
  admin: Adminpanel = {email_id:'',password:''};

  constructor(private router: Router,private adminService: AdminPanelService,private fb: FormBuilder,private activatedRoute: ActivatedRoute) { }
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email_id: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,Validators.minLength(5)])
    })
  }


  validateemail_id(){

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.reactiveForm.value.email_id = !pattern.test(this.reactiveForm.value.email_id);
    console.log(this.reactiveForm.value.email_id);
  }





  goToProducts(){
    this.router.navigate(['/products']);
  }

  onSubmit():void{

    if(this.reactiveForm.value.email_id === 'admin@shoppingcart.com' && this.reactiveForm.value.password ==='admin') {
      alert('Welcome Admin! Click OK to open Admin Home Page...')
      this.goToProducts();
   } else {
    alert('You have entered incorrect details...')
   }
}
}
