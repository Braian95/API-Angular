import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';
import { AuthtokenService } from './auth/authtoken.service';

@Injectable({
  providedIn: 'root'
})

export class ServicioMirifaService {
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

  ObtenerRifaActual (): Observable <any>{
    return this.http.get(this.url+"api/rifa/list/")
  }
  ObtenerRifaFilter (rifa: string): Observable <any>{
    return this.http.get(this.url+"api/rifa/filter/"+rifa, this.httpOptions)
  }
  CrearRifa(rifa:object): Observable <any>{
    return this.http.post(this.url+"api/rifa/add/", rifa, this.httpOptions)
  }

  EliminarRifas(id:number): Observable <any>{
    return this.http.delete(this.url+"api/rifa/delete/"+ id, this.httpOptions)
  }

  UpdateRifas(titulo:string, rifa : object ): Observable <any>{
    return this.http.put(this.url+"api/rifa/update/"+titulo,rifa,this.httpOptions)
  }

  muestraMensaje (mensaje:string){

    alert(mensaje);
  }
}
