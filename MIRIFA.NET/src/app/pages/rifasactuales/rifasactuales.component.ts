import { Component, OnInit } from '@angular/core';
import { ServicioMirifaService } from 'src/app/Servicios/servicio-mirifa.service';

@Component({
  selector: 'app-rifasactuales',
  templateUrl: './rifasactuales.component.html',
  styleUrls: ['./rifasactuales.component.css']
})

export class RifasactualesComponent implements OnInit{
  listaRifasActuales:any;

  constructor(private rifas:ServicioMirifaService ) {
  this.ObtenerRifa();
}

ObtenerRifa (){
  this.rifas.ObtenerRifaActual().subscribe({
    next:(RifaActualData)=>{
      this.listaRifasActuales=RifaActualData;
    },
    error: (errorData) =>{
      console.error(errorData)
    }
  })
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}


