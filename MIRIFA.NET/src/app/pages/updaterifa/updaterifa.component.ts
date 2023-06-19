import { Component } from '@angular/core';
import { ServicioMirifaService } from 'src/app/Servicios/servicio-mirifa.service';
import { AuthtokenService } from 'src/app/Servicios/auth/authtoken.service';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-updaterifa',
  templateUrl: './updaterifa.component.html',
  styleUrls: ['./updaterifa.component.css']
})
export class UpdaterifaComponent {
  invalido = "";
  rifaFilter:any

  actualizarRifa = this.formBuilder.group({
    nombre_sorteo:['',[Validators.required, Validators.minLength(5)]],
    motivo:['',[Validators.required,Validators.minLength(20)]],
    organizador:['',[Validators.required,Validators.minLength(5)]],
    premio1:['',[Validators.required,Validators.minLength(5)]],
    premio2:['',[Validators.required,Validators.minLength(5)]],
    premio3:['',[Validators.required,Validators.minLength(5)]],
    cantidad_rifas:['',[Validators.required,Validators.min(100)]],
    valor:['',[Validators.required,Validators.min(100)]],
    titular:['',[Validators.required,Validators.minLength(5)]],
    cbu:['',[Validators.required,Validators.minLength(22)]],
    banco:['',[Validators.required,Validators.minLength(5)]],
    fecha_sorteo:['',[Validators.required]],
  })
  constructor(private miServicio:ServicioMirifaService, private formBuilder:FormBuilder, private auth: AuthtokenService, private router: Router, private cookie: CookieService){
    this.ObtenerRifas()
  }

  ObtenerRifas(){
    this.miServicio.ObtenerRifaFilter(this.cookie.get("rifa")).subscribe({
      next:(rifaActualData)=>{
      this.rifaFilter=rifaActualData
    },
    error:(errorData)=>{
      console.error(errorData)
    }
  })
  }
  get Titulo(){
    return this.actualizarRifa.get("titulo")
  }
  get Descripcion(){
    return this.actualizarRifa.get("descripcion")
  }
  get Organizador(){
    return this.actualizarRifa.get("organizador")
  }
  get Premio1(){
    return this.actualizarRifa.get("premio1")
  }
  get Premio2(){
    return this.actualizarRifa.get("premio2")
  }
  get Premio3(){
    return this.actualizarRifa.get("premio3")
  }
  get NumRifas(){
    return this.actualizarRifa.get("numRifas")
  }
  get Monto(){
    return this.actualizarRifa.get("monto")
  }
  get Titular(){
    return this.actualizarRifa.get("titular")
  }
  get Cbu(){
    return this.actualizarRifa.get("cbu")
  }
  get Banco(){
    return this.actualizarRifa.get("banco")
  }
  get Fecha(){
    return this.actualizarRifa.get("fecha")
  }
  get RifasDestacadas(){
    return this.actualizarRifa.get("rifasDestacadas")
  }

  onEnviar(event: Event, rifa:string){
    event.preventDefault;
    if(this.actualizarRifa.valid){
      alert("Enviar al servidor...")
      console.log(this.actualizarRifa.value)
      this.miServicio.UpdateRifas(rifa,this.actualizarRifa.value).subscribe()
      this.router.navigate(['/rifasactuales'])
    }else{
      this.actualizarRifa.markAllAsTouched()
      this.invalido = "is-invalid border-danger"
    }
  }
}

