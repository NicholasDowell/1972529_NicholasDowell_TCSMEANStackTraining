import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  registerUser(userName:string, passWord:string){
    var obj1 = {
      username:userName,
      password:passWord
    }
    let saveable = JSON.stringify(obj1);
    sessionStorage.setItem("info", saveable);
    this.router.navigate(["login"]);
  }
}
