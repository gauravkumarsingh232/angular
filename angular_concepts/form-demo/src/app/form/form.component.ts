import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(username:any){
    console.log(username);
  }

  login(){
    console.log("login success!!!");
  }

  registerNewUser(){
    console.log("registerNewUser done!!!");
  }
}
