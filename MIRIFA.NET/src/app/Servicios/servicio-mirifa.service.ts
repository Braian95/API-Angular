import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ServicioMirifaService {
  url:string="http://localhost:8000/"
  constructor(private http:HttpClient) { }

  ObtenerRifaActual (): Observable <any>{
    return this.http.get(this.url+"api/rifa/list/")
  }
  CrearRifa(rifa:object): Observable <any>{
    return this.http.post(this.url+"api/rifa/add/",rifa)
  }

  EliminarRifas(id:number): Observable <any>{
    return this.http.get(this.url+"api/auth/delete/?id="+id)
  }

  muestraMensaje (mensaje:string){

    alert(mensaje);
  }
}
