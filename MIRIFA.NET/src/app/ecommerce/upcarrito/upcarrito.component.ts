import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
import { AuthtokenService } from 'src/app/Servicios/auth/authtoken.service';
import { ServicioCarritoService } from 'src/app/Servicios/servicio-carrito.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-upcarrito',
  templateUrl: './upcarrito.component.html',
  styleUrls: ['./upcarrito.component.css']
})
export class UpcarritoComponent {
  carritoList:any
  invalido=""
  carritoForm = this.formBuilder.group({
    cantidad:['',[Validators.required,]],
    total:['',[Validators.required,]],
  });
  constructor(private carrito:ServicioCarritoService, private formBuilder:FormBuilder, private auth: AuthtokenService, private cookie: CookieService){
    this.ObtenerCarritoFilter()
  }

  ObtenerCarritoFilter(){
    this.carrito.ObtenerCarritoFilter(this.cookie.get("carrito")).subscribe({
      next:(carritoActualData)=>{
        this.carritoList=carritoActualData
      },
      error:(errorData)=>{
        console.error(errorData)
      }
    })
  }

  get Cantidad(){

    return this.carritoForm.get("cantidad")
  
  }
  
  get Total(){
  
    return this.carritoForm.get("total")
    
  }

  onEnviar(event: Event, titulo:string){
    event.preventDefault;
    if(this.carritoForm.valid){
      alert("Enviar al servidor...")
      console.log(this.carritoForm.value)
      this.carrito.UpdateCarrito(titulo,this.carritoForm.value).subscribe()
    }else{
      this.carritoForm.markAllAsTouched();
      this.invalido = "is-invalid"
    }
  }
}
