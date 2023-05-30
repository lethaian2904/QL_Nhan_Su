import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { NhanvienFormComponent } from './nhanvien-form/nhanvien-form.component';

const appRouters: Routes= [
  {path : '', component:LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'home', component: NhanvienComponent },
  {path : 'nhanvien/:id', component: NhanvienComponent},
  {path : 'add', component: NhanvienFormComponent}

]


@NgModule({
  imports: [
    RouterModule.forRoot(appRouters),
  ],
  
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
