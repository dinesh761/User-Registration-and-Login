import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public registerService: RegisterService) { }
  msgTrue= false;
  ngOnInit(): void {}

   /* forgetPasswordUser(forgetPasswordForm:NgForm){ 
      const newFormData = {email:forgetPasswordForm.value.email};
      this.registerService.forgetPasswordForm(newFormData).subscribe(dataValue => {
        this.msgTrue = true;
        console.log(dataValue);
      }) 
    } */

}
