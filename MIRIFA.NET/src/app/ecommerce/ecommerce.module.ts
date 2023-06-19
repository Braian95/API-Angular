import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraComponent } from './compra/compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpcarritoComponent } from './upcarrito/upcarrito.component';


@NgModule({
  declarations: [
    CarritoComponent,
    CompraComponent,
    UpcarritoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CarritoComponent,
    CompraComponent,
    UpcarritoComponent
  ]
})
export class EcommerceModule { }
