import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthtokenService } from './authtoken.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
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

  ObtenerCarrito(): Observable <any>{
    return this.http.get(this.url+"api/auth/user/")
  }
  EliminarCarrito(indice:number):Observable <any>{
    return this.http.delete(this.url+"rifasCarrito/"+indice)
  }
  AñadirCarrito():Observable <any>{
    return this.http.post(this.url+"rifasCarrito/",{
      "id": 3,
      "titulo": "Guarderia CUIDAMOS",
      "numeros": 10,
      "valor": 250
    },)
  }
}
