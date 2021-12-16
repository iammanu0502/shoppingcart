import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginFields } from '../login';
import { SignupService } from '../signup.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService,SignupService]
})
export class LoginComponent implements OnInit {
  alert:boolean=false
  errors={email_id:false}
  loginfields: LoginFields={email_id:'',password:''};
 // regArry: any = {}
  constructor(private login: LoginService, private router: Router,private fb: FormBuilder, private signupservice:SignupService) { }
  // email_id: string;
  // password: string;
  reactiveForm!: FormGroup;
  //reactiveForm: any;
  ngOnInit(): void {


    this.reactiveForm = new FormGroup({
      email_id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }


  goToNextPage(){
    this.router.navigate(['/electronics']);
   }


   validateemail_id(){

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.email_id = !pattern.test(this.loginfields.email_id);
    console.log(this.errors.email_id);
  }



  onSubmit() {
    // console.log('on submit click test')
    console.log(this.loginfields.email_id);
    this.alert=true
    this.signupservice.getUser(this.loginfields.email_id, this.loginfields.password).subscribe((response) => {
      console.log(response)
      alert('Login Successful,  Click ok to continue...')
      this.goToNextPage();
  });

   }
   closeAlert(){
    this.alert=false
  }

}
