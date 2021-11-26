
import { Component, OnInit } from '@angular/core';
import { Signup } from '../Signup';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {


  errors = { emailId: false };
  err = { password: false };
  signup: Signup = new Signup();

  constructor(private signupService: SignupService,
    private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['home'])
  }

  saveUser() {
    this.signupService.create(this.signup).subscribe(data => {
      console.log(data);
      this.goToLogin();
    },
      error => {
        return console.log(error);
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }


  onSubmit() {

    if (this.signup.username && this.signup.phone_no && this.signup.password && !this.errors.emailId && !this.err.password) {

      console.log(this.signup);

      this.saveUser();
    }
    else {
      alert("You missed some fields.....all fields are required");
    }
  }


  validateemailId() {

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    this.errors.emailId = !pattern.test(this.signup.email_id);
    console.log(this.errors.emailId);
  }


  validatepassword() {

    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    this.err.password = !pattern.test(this.signup.password);

    if (!this.err.password) {
      this.err.password = this.signup.password !== this.signup.confirm_password;
    }
    console.log(this.err.password);

  }

}
