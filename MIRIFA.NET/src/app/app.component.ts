import { Component } from '@angular/core';
import { ServicioCarritoService } from './Servicios/servicio-carrito.service';
import { ServicioMirifaService } from './Servicios/servicio-mirifa.service';
import { ServicioUsuarioService } from './Servicios/servicio-usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MIRIFA.NET';

  constructor(private miServicio:ServicioMirifaService){}

}


