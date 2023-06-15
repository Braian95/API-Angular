import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from 'src/app/Servicios/servicio-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  carritoActual:any;

  constructor(private carrito:ServicioCarritoService ){
    this.ObtenerDatos();
  }

  ObtenerDatos(){
    this.carrito.ObtenerCarrito().subscribe({
      next:(carritoActualData)=>{
        this.carritoActual=carritoActualData;
      },
      error: (errorData) =>{
        console.error(errorData)
      }
    })
  }
  
  OnClickEliminar(indice:number){
    this.carrito.EliminarCarrito(indice).subscribe();
    alert("Rifa eliminada con exito");
    this.ObtenerDatos();
  }
  OnClickAdd(){
    this.carrito.AñadirCarrito().subscribe();
    this.ObtenerDatos();
  }
  ngOnInit(): void {
    
  }

}
