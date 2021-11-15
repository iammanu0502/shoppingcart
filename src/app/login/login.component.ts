import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginFields } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  errors={email_id:false}
  loginfields: LoginFields={email_id:'',password:''};
 // regArry: any = {}
  constructor(private login: LoginService, private router: Router,private fb: FormBuilder) { }
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

  // logincheck(){
  //   sessionStorage.setItem('loggedUser', this.email_id);
  //   if
  //     (this.email_id=='' && this.password=='')
  //      this.router.navigateByUrl('/electronics')

  //   else{
  //     alert('invalid login')
  //   }
  // }

  goToNextPage(){
    this.router.navigate(['/electronics']);
   }


   validateemail_id(){

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.email_id = !pattern.test(this.loginfields.email_id);
    console.log(this.errors.email_id);
  }



  onSubmit() {
    console.log(this.reactiveForm.value);
    this.login.loginUser(this.reactiveForm.value).subscribe((response) => {
    console.log(response)
    alert('You have loggedin sucessfully! Click ok to Continue...')
    this.goToNextPage();
  });
   }

}
