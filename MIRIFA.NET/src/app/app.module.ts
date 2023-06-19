import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { PagesModule } from './pages/pages.module';
import { ServicioMirifaService } from './Servicios/servicio-mirifa.service';
import { ServicioCarritoService } from './Servicios/servicio-carrito.service';
import { ServicioUsuarioService } from './Servicios/servicio-usuario.service';
import { AuthtokenService } from './Servicios/auth/authtoken.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EcommerceModule,
    PagesModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicioMirifaService,
    ServicioCarritoService,
    ServicioUsuarioService,
    CookieService,
    AuthtokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
