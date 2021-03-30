import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  
  constructor(router:Router) { }

  ngOnInit(): void {
  }
  loginAttempt(user:string, pass:string){
    var obj1 = {
      username:user,
      password:pass
    }
    let saveable = JSON.stringify(obj1);
    sessionStorage.setItem("loginAttempt", saveable);
  }
}
