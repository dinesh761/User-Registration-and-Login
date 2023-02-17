import { Router } from '@angular/router';
import { AppRoutingModule } from './../../app-routing.module';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;


  constructor(public registerService: RegisterService, private toastr: ToastrService, private router: Router) { } 
  
  //trial
  msgTrue= false;
  dob = "hello";
 
  //url = "http:localhost:4200/api/user/login";

  ngOnInit(): void {
    
  }
 /* signupUser(signupForm:NgForm){
  
  this.registerService.registerForm(signupForm.value.firstname, signupForm.value.lastname);
} */

signupUser(signupForm:NgForm){
  const newFormData = {firstname:signupForm.value.firstname, lastname:signupForm.value.lastname, email:signupForm.value.email, password:signupForm.value.password, confirmpassword:signupForm.value.confirmpassword, gender:signupForm.value.gender, dob:this.dob, tel:signupForm.value.phone, city:signupForm.value.city, state:signupForm.value.state, country:signupForm.value.country, roles:signupForm.value.role};
  this.registerService.registerForm(newFormData).subscribe(
    
    data => {
    this.msgTrue = true;
    signupForm.reset();
    setTimeout(()=>{
      this.router.navigate(['api/user/login']);
    },2000);
  },
  
  error => {
 (document.querySelector('#success-close') as HTMLElement).style.display = 'block';
  setTimeout(()=>{    
     (document.querySelector('#success-close') as HTMLElement).style.display = 'none';  
                  
       }, 6000);
        
      }
) 
      }

}






