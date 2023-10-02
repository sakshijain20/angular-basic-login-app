import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm :NgForm;

  uname: string;
  password: string;
  loginResult: string

  constructor(){}

  ngOnInit() {
    this.loginResult ='';
  }

  login(){
    //console.log(this.uname);
    

    if(this.uname == "user" && this.password == "password"){
      this.loginResult = "success";
      alert("Login successful!!");
    }
    else{
      this.loginResult = "failed";
      alert("Login failed");
    }
    //console.log(this.loginResult);


  }



}
