import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  url:string="http://localhost:8000/"
  constructor(private http:HttpClient, private cookies:CookieService) { }

  ObtenerListado(): Observable <any>{
    this.getToken()
    return this.http.get(this.url+"api/auth/list")
  }

  EliminarUser(id:string): Observable <any>{
    return this.http.get(this.url+"api/auth/delete/"+id)
  }

  EnviarUser(user:object): Observable <any>{
    return this.http.post(this.url+"api/auth/login/",user)
  }

  setToken(token:string){
    this.cookies.set("sessionid",token)
  }
  getToken(){
    this.cookies.get("sessionid")
  }
}
