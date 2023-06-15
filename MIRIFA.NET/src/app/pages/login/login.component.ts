import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/Servicios/servicio-usuario.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms'
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { AuthtokenService } from 'src/app/Servicios/authtoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  invalido=""
  loginForm = this.formBuilder.group({
    username:['',[Validators.required]],
    password:['', [Validators.required ,Validators.minLength(8)]]
  });

  constructor(private Miservicio:ServicioUsuarioService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private Auth: AuthtokenService){
    }

  get Password(){
    return this.loginForm.get("password");
  }

  get Usuario(){
    return this.loginForm.get("username");
  }


  onEnviar(event: Event){
    event.preventDefault;
    if(this.loginForm.valid){
      alert("Enviar al servidor...")
      console.log(this.loginForm.value)
      this.Miservicio.EnviarUser(this.loginForm.value).subscribe(data =>{
        this.Auth.setToken(data.token)
      })
      this.router.navigate(['/profile'])
    }else{
      this.loginForm.markAllAsTouched();
      this.invalido = "is-invalid"
    }
  }
}
