import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { ServicioUsuarioService } from '../servicio-usuario.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
url="http://localhost:8000/api/auth/login/"
currentUserSubject: BehaviorSubject<ServicioUsuarioService>
currentUser: Observable<ServicioUsuarioService>

  constructor(private http:HttpClient) { 
    console.log("Servicio de autentificacion corriendo")
    this.currentUserSubject = new 
    BehaviorSubject<ServicioUsuarioService>(JSON.parse(localStorage.getItem('currentUSer') || '{}'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  Login(usuario:ServicioUsuarioService):Observable<any> {
    return this.http.post<any>(this.url, ServicioUsuarioService).pipe(map(
      data => {
        localStorage.setItem('currentUser', JSON.stringify(data))
        this.currentUserSubject.new(data)
        this.loggedIn.next(true)
        return data
      }
    ))
  }

  Logout():void{
    localStorage.removeItem('currentUser')
    this.loggedIn.next(false)
  }

  get usuarioAutenticado(): ServicioUsuarioService{
    return.this.currentUserSubject.value
  }

  get estaAutenticado(): Observable<boolean>{
    return this.loggedIn.asObservable()
  }
}