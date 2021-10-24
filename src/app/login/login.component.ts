import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regArry: any = {}
  constructor(private fb: FormBuilder) { }
  reactiveForm!: FormGroup;
  //reactiveForm: any;
  ngOnInit(): void {


    this.reactiveForm = new FormGroup({
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.reactiveForm.value)
  }

}
