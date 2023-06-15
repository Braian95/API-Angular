import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';
import { AuthtokenService } from './authtoken.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  url:string="http://localhost:8000/" 
  httpOptions:any

  constructor(private http:HttpClient, private Auth: AuthtokenService) { 
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

  EliminarUser(id:string): Observable <any>{
    return this.http.get(this.url+"api/auth/delete/"+ id, this.httpOptions)
  }

  EnviarUser(user:object): Observable <any>{
    return this.http.post(this.url+"api/auth/login/", user)
  }

}
