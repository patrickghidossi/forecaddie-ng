import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'fc-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  loginInfo = {
          username: "",
          email: "",
          password: "",
      };
      
  constructor() { }

  ngOnInit() {
  }

}
