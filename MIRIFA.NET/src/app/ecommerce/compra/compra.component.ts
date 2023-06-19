import { Component } from '@angular/core';
import { ServicioCarritoService } from 'src/app/Servicios/servicio-carrito.service';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  invalido = "";
  compraForm = this.formBuilder.group({
    numero:['',[Validators.required, Validators.maxLength(16)]],
    nombre:['',[Validators.required,Validators.minLength(10)]],
    mes:['',[Validators.required,Validators.maxLength(2)]],
    year:['',[Validators.required,Validators.maxLength(2)]],
    codigo:['',[Validators.required,Validators.maxLength(3)]],
    dni:['',[Validators.required,Validators.minLength(5)]],
  })

  constructor(private miServicio:ServicioCarritoService, private formBuilder:FormBuilder){}

  get Numero(){
    return this.compraForm.get("numero")
  }
  
  get Nombre(){
    return this.compraForm.get("nombre")
  }

  get Mes(){
    return this.compraForm.get("mes")
  }

  get Year(){
    return this.compraForm.get("year")
  }

  get Codigo(){
    return this.compraForm.get("codigo")
  }

  get DNI(){
    return this.compraForm.get("dni")
  }

  onEnviar(event: Event){
    event.preventDefault;
    if(this.compraForm.valid){
      alert("Enviar al servidor...")
    }else{
      this.compraForm.markAllAsTouched()
      this.invalido = "is-invalid border-danger"
    }
  }

}
