import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyAuthGuard } from './myAuthGuard';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

const routes: Routes = [
  {path:"\login", component:LoginComponentComponent},
  {path:"\signup", component:SignupComponentComponent},
  {path:"\portfolio", component:PortfolioComponentComponent, canActivate:[MyAuthGuard]},
  {path:"", redirectTo:"\login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
