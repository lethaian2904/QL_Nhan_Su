import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutesModule } from './app-routes.module';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { HttpClientModule } from '@angular/common/http';
import { NhanvienFormComponent } from './nhanvien-form/nhanvien-form.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { trigger,state,style,transition,animate } from '@angular/animations';



@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    HomeComponent,
    NhanvienComponent,
    NhanvienFormComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutesModule, 
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
