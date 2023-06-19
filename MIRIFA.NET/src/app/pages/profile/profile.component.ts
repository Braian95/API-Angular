import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/Servicios/servicio-usuario.service';
import { ServicioMirifaService } from 'src/app/Servicios/servicio-mirifa.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuariosList:any
  rifasActual:any

  constructor(private usuarios:ServicioUsuarioService, private rifas:ServicioMirifaService, private router: Router, private cookie: CookieService){
    this.ObtenerDatosUser()
    this.ObtenerDatosRifas()
  }

  ObtenerDatosUser(){
    this.usuarios.ObtenerListado().subscribe({
      next:(usuariosActualData)=>{
        this.usuariosList=usuariosActualData
      },
      error:(errorData)=>{
        console.error(errorData)
      }
    })
  }

  ObtenerDatosRifas(){
    this.rifas.ObtenerRifaActual().subscribe({
      next:(rifasActualData)=>{
        this.rifasActual=rifasActualData
      },
      error:(errorData)=>{
        console.error(errorData)
      }
    })
  }

  OnDeleteRifa(value:number){
    alert("Eleminar rifa con ID:"+value)
    this.rifas.EliminarRifas(value).subscribe()
    window.location.reload()
  }
  
  OnEditRifa(value:string){
    alert("Editar rifa con ID:"+value)
    this.cookie.set("rifa", value)
    this.router.navigate(['/uprifa'])
  }

  onDeleteUser(username:string){
    alert("Eliminar usuario con mail:"+username)
    this.usuarios.EliminarUser(username).subscribe();
    window.location.reload()
  }

  onEditUser(username:string){
    alert("Editar usuario con mail:"+username)
    this.cookie.set("user", username)
    this.router.navigate(['/upuser'])
  }

  ngOnInit(): void {
    
  }
}
