import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regArry: any = {}
  constructor(private fb: FormBuilder) { }
  reactiveForm!: FormGroup;
  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,Validators.minLength(4)]),
      confirm_password: new FormControl('', Validators.required),
      notSame: new FormControl('notSame', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.reactiveForm.value)
  }

}
