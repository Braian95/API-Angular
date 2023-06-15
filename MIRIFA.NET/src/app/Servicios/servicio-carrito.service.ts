import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  url:string="http://localhost:8000/"
  constructor(private http:HttpClient) { }

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
