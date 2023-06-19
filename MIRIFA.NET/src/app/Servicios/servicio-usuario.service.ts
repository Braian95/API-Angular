import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';
import { AuthtokenService } from './auth/authtoken.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  url:string="http://localhost:8000/" 
  httpOptions:any

  constructor(private http:HttpClient, private Auth:AuthtokenService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Token ' + this.Auth.getToken()
      })
    };
   }

   ObtenerListado(): Observable <any>{
    return this.http.get(this.url+"api/auth/list", this.httpOptions)
  }

  ObtenerListadoUser(user:string): Observable <any>{
    return this.http.get(this.url+"api/auth/filter/" + user, this.httpOptions)
  }

  EliminarUser(username:string): Observable <any>{
    return this.http.delete(this.url+"api/auth/delete/"+ username, this.httpOptions)
  }

  EnviarUser(user:object): Observable <any>{
    return this.http.post(this.url+"api/auth/login/", user)
  }

  AñadirUser(user:object): Observable <any>{
    return this.http.post(this.url+"api/auth/signup/", user)
  }

  UpdateUser(username:string,user:object): Observable <any>{
    return this.http.put(this.url+'api/auth/update/'+ username, user, this.httpOptions)
  }

  muestraMensaje (mensaje:string){

    alert(mensaje);
  }
}
