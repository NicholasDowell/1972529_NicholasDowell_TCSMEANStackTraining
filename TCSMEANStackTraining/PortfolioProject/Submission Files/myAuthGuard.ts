import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";


@Injectable()
export class MyAuthGuard implements CanActivate{
    constructor(public router:Router){}

    canActivate(){
        let info = sessionStorage.getItem("info");
        let att = sessionStorage.getItem("loginAttempt");
        console.log("AuthGuard method called");
        if(info == att){
            sessionStorage.removeItem("loginAttempt");
            return true;
        }
        sessionStorage.removeItem("loginAttempt");
        return false;
    }
}