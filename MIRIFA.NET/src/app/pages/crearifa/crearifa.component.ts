import { Component } from '@angular/core';
import { ServicioMirifaService } from 'src/app/Servicios/servicio-mirifa.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearifa',
  templateUrl: './crearifa.component.html',
  styleUrls: ['./crearifa.component.css']
})

export class CrearifaComponent {
  invalido = "";
  crearRifaForm = this.formBuilder.group({
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
  constructor(private miServicio:ServicioMirifaService, 
    private formBuilder:FormBuilder, private router: Router){

  }
  get Titulo(){
    return this.crearRifaForm.get("nombre_sorteo")
  }
  get Descripcion(){
    return this.crearRifaForm.get("motivo")
  }
  get Organizador(){
    return this.crearRifaForm.get("organizador")
  }
  get Premio1(){
    return this.crearRifaForm.get("premio1")
  }
  get Premio2(){
    return this.crearRifaForm.get("premio2")
  }
  get Premio3(){
    return this.crearRifaForm.get("premio3")
  }
  get NumRifas(){
    return this.crearRifaForm.get("cantidad_rifas")
  }
  get Monto(){
    return this.crearRifaForm.get("valor")
  }
  get Titular(){
    return this.crearRifaForm.get("titular")
  }
  get Cbu(){
    return this.crearRifaForm.get("cbu")
  }
  get Banco(){
    return this.crearRifaForm.get("banco")
  }
  get Fecha(){
    return this.crearRifaForm.get("fecha_sorteo")
  }

  onEnviar(event: Event){
    event.preventDefault;
    if(this.crearRifaForm.valid){
      alert("Enviar al servidor...")
      console.log(this.crearRifaForm.value)
      this.miServicio.CrearRifa(this.crearRifaForm.value).subscribe(
        data =>{
          console.log(data.id);
          if (data.id>0)
          {
            alert("Rifa creada con exito")
            this.router.navigate(['/rifasactuales'])
          }
        }
      )
    }else{
      this.crearRifaForm.markAllAsTouched()
      this.invalido = "is-invalid border-danger"
    }
  }
}
