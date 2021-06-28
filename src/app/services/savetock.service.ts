import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { stocktosave } from '../stocktosave';

@Injectable({
  providedIn: 'root'
})
export class SavetockService {

 constructor(private http:HttpClient,
    private logincompo : LoginComponent) { }

  saveStock(stockdata : stocktosave){
   // console.log("user "+stockdata.username+" stock: "+stockdata.stockname);
  //   console.log("logineduser "+this.logincompo.username);
    this.http.post(`http://localhost:8080/saveStock`,stockdata).toPromise().then(data=>{
      console.log(data);
    }).catch(error=>console.log(error.message));
    console.log("trying to send");
  }
}
