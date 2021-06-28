import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url="http://localhost:8080";
  constructor(private http : HttpClient) { }

  //calling server to generate token
  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`,credentials);
  }

  //for login user
  loginUser(token){
    localStorage.setItem("token",token);   
    return true;
  }

  //to check if user is logged in
  isLoggedIn(){
   let token= localStorage.getItem("token");
   if(token==undefined || token==='' || token==null){
     return false;     
   }else{
     return true;
   }
  }

  //to logout user
  logout(){
    localStorage.removeItem("token");
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token");
  }
}
