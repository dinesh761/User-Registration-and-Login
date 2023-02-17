import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
//import { UsersModule } from './users.module';

@NgModule({
  declarations: [
    RegisterComponent,
    PageNotFoundComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    PageNotFoundComponent
  ]
})
export class UsersModule { }
