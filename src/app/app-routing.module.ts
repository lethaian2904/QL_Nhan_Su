import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const appRouters = [
  {path : 'login',  LoginComponent},
  {path : 'home',  HomeComponent },
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRouters),
  ],
  
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }