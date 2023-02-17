import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm, NgModel } from '@angular/forms';
import { RegisterService } from '../register.service';
import { AppRoutingModule } from '../../app-routing.module';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public registerService: RegisterService, private toastr: ToastrService, private router: Router) { }

  msgTrue= false;


  ngOnInit(): void {


  }
  loginUser(loginForm:NgForm){
    const newFormData = {email:loginForm.value.email, password:loginForm.value.password};
    this.registerService.loginForm(newFormData).subscribe( data => {
      this.msgTrue = true;
      setTimeout(()=>{
        this.router.navigate(['api/non-auth/profile']);
      },1000);
    },
    
    error => {
   (document.querySelector('#success-close-login') as HTMLElement).style.display = 'block';
     setTimeout(()=>{    
       (document.querySelector('#success-close') as HTMLElement).style.display = 'none';  
                    
         }, 6000);
          
        }
  ) 
        }
  
  }
