import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthtokenService {

  constructor(private cookies:CookieService) { }

  setToken(token:string){
    this.cookies.set("tokenUser",token)    
  }
  getToken(){
    return this.cookies.get("tokenUser")
  }
}
