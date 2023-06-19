import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthtokenService } from './auth/authtoken.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
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

  ObtenerCarrito(): Observable <any>{
    return this.http.get(this.url+"api/carrito/list/")
  }

  ObtenerCarritoFilter(titulo:string): Observable <any>{
    return this.http.get(this.url+"api/carrito/filter/"+titulo,this.httpOptions)
  }
  EliminarCarrito(indice:number):Observable <any>{
    return this.http.delete(this.url+"api/carrito/delete/"+indice, this.httpOptions)
  }

  UpdateCarrito(titulo:string, carrito:object): Observable <any>{
    return this.http.put(this.url+"api/carrito/update/"+titulo,carrito, this.httpOptions)
  }

  AñadirCarrito(titulo:string, total:number):Observable <any>{
    return this.http.post(this.url+"api/carrito/add",{
      "cantidad": "1",
      "total": total,
      "descuento": "0.00",
      "titulo_rifa": titulo
    },this.httpOptions)
  }
}
