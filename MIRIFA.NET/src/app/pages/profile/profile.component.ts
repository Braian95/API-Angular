import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/Servicios/servicio-usuario.service';
import { ServicioMirifaService } from 'src/app/Servicios/servicio-mirifa.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuariosList:any
  rifasActual:any

  constructor(private usuarios:ServicioUsuarioService, private rifas:ServicioMirifaService){
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
  
  OnEditRifa(value:number){
    alert("Editar rifa con ID:"+value)
  }

  onDeleteUser(mail:string){
    alert("Eliminar usuario con mail:"+mail)
    this.usuarios.EliminarUser(mail).subscribe();
    window.location.reload()
  }

  onEditUser(mail:string){
    alert("Editar usuario con mail:"+mail)
  }

  ngOnInit(): void {
    
  }
}
