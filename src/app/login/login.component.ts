import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.login.get('email')?.value == "deepak@gmail.com" && this.login.get('password')?.value == "Abhi@0211")
    {
    this.router.navigate(['add-products']);
  }else{
    alert("please enter correct email and password")
  }
}

}
