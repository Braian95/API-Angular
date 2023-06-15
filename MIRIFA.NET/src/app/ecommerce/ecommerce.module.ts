import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraComponent } from './compra/compra.component';



@NgModule({
  declarations: [
    CarritoComponent,
    CompraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarritoComponent,
    CompraComponent
  ]
})
export class EcommerceModule { }
