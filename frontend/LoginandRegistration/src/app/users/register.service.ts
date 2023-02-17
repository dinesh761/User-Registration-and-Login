import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {
    
  }
  /*registerForm(firstname:string, lastname:string)
  { 
    const detail:any= {first:firstname,last:lastname}
    return this.httpClient.post('http://localhost:3000/register', detail);
  }*/
  
    
   

  registerForm(value:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/api/user/register', value, {headers:httpHeaders});
  }

  loginForm(valueLogin:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/api/user/login', valueLogin, {headers:httpHeaders})
  }

  /* forgetPasswordForm(valuePassword:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/api/user/forgotpassword', valuePassword, {headers:httpHeaders});
  }

*/

profilePage(value:any){
  const httpHeaders= new HttpHeaders();
  httpHeaders.append('content-type', 'application/json');
return this.httpClient.get('http://localhost:3000/api/user/profile', {headers:httpHeaders})
}

}




//this.registerService.createContact(newFormData).subscribe(data => {
//  this.msgTrue = true;
//})

