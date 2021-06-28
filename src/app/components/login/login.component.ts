import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    console.log("form submitted");
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      console.log("submitting");
      // console.log(this.credentials.username+"   "+this.credentials.password);
      //generate token
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log(response.token);
          this.loginService.loginUser(response.token);
          localStorage.setItem("username", this.credentials.username);
          console.log(localStorage.getItem("username"));
          window.location.href = "/dashboard";
        },
        error => {
          console.log(error);
        }
      )
    } else {
      alert("Fields cannot be empty!!");
    }
  }

}
