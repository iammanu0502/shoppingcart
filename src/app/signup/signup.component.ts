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
  err={ password:false};
  signup: Signup = {Id:'',username:'', email_id:'',phone_no:'',password:'',confirm_password:''};

 constructor(private signupService: SignupService, private router: Router, private fb: FormBuilder,private activatedRoute: ActivatedRoute) { }
    reactiveForm!: FormGroup;

   ngOnInit(): void {


    // this.reactiveForm = new FormGroup({
    //   // username: new FormControl('', Validators.required),
    //   // email_id: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
    //   // phone_no: new FormControl('', Validators.required),
    //   // password: new FormControl('', [Validators.required,Validators.minLength(4)]),
    //   // confirm_password: new FormControl('', Validators.required)
    // })
  }

  validatepassword(){

    const pattern = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{4,}/ ;

     this.err.password = !pattern.test(this.signup.password);

    if(!this.err.password){
    this.err.password=this.signup.password !== this.signup.confirm_password;
    }
     console.log(this.err.password);

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
  if(this.signup.username && this.signup.password && this.signup.phone_no && !this.errors.email_id && !this.err.password )
    {
      console.log(this.signup);
      this.goToLogin();
    }
    else{
      alert("You missed your data.....below fields are required");
    }
 }
}
