import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { NhanvienFormComponent } from './nhanvien-form/nhanvien-form.component';
import { AuthGuard } from './AuthGuard/auth.guard';


const appRouters: Routes= [
  {path : '', component:LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'home', component: NhanvienComponent, canActivate:[AuthGuard] },
  {path : 'home/:ID', component: NhanvienComponent,},
  {path : 'add/:ID', component: NhanvienFormComponent, },
  {path : 'add', component: NhanvienFormComponent },
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path : '*', component:LoginComponent},

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
