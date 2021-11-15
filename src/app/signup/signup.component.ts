import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from '../Signup';
import { SignupService } from '../signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [SignupService]
})


export class SignupComponent implements OnInit {
  errors={email_id:false}
  signup: Signup = {Id:'',username:'', email_id:'',phone_no:'',password:'',confirm_password:''};
// submitted=false;
  // signupService: any;
 constructor(private signupService: SignupService, private router: Router, private fb: FormBuilder,private activatedRoute: ActivatedRoute) { }
    reactiveForm!: FormGroup;

   ngOnInit(): void {


    this.reactiveForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email_id: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone_no: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,Validators.minLength(4)]),
      confirm_password: new FormControl('', Validators.required)
    })
  }

  validateemail_id(){

     const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

      this.errors.email_id = !pattern.test(this.signup.email_id);
     console.log(this.errors.email_id);
   }


   goToLogin(){
    this.router.navigate(['/login']);
   }



 onSubmit():void{
  console.log(this.reactiveForm.value);
  this.signupService.create(this.reactiveForm.value).subscribe((response) => {
    console.log(response)
    alert('You have registered sucessfully! Click ok to login...')
    this.goToLogin();
  });
 }
}
