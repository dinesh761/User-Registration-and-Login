import { ProfileComponent } from './non-auth/profile/profile.component';
import { ForgetPasswordComponent } from './users/forget-password/forget-password.component';
import { LoginComponent } from './users/login/login.component';
import { PageNotFoundComponent } from './users/page-not-found/page-not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
{path: '', redirectTo: 'api/user/login', pathMatch: 'full'},
{path: 'api/user/register', component: RegisterComponent},
{path: 'api/user/login' , component: LoginComponent},
{path: 'api/user/forgotpassword' , component: ForgetPasswordComponent},
{path: 'api/non-auth/profile' , component: ProfileComponent},
{path: '**', component: PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
