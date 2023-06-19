import { Component } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/Servicios/servicio-usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms'
import { AuthtokenService } from 'src/app/Servicios/auth/authtoken.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  invalido=""
  registerForm = this.formBuilder.group({
    nombre:['',[Validators.required, Validators.minLength(2),Validators.maxLength(30)]],
    apellido:['',[Validators.required,Validators.minLength(2),Validators.maxLength(30)]],
    DNI:['',[Validators.required,Validators.minLength(7)]],
    ciudad:['',Validators.required],
    provincia:['',Validators.required],
    telefono:['',[Validators.required,Validators.minLength(7)]],
    username:['',[Validators.required,Validators.min(5)]],
    email:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(8)]],
  });

constructor(private Miservicio:ServicioUsuarioService, private formBuilder:FormBuilder, private auth: AuthtokenService){

}

get Nombre(){

  return this.registerForm.get("nombre")

}

get Apellido(){

  return this.registerForm.get("apellido")
  
}

get DNI(){

  return this.registerForm.get("DNI")
  
}

get Ciudad(){

  return this.registerForm.get("ciudad")
  
}

get Provincia(){

  return this.registerForm.get("provincia")
  
}

get Telefono(){

  return this.registerForm.get("telefono")
  
}

get Usuario(){

  return this.registerForm.get("username")
  
}

get Email(){

  return this.registerForm.get("email")
}

get Password(){

  return this.registerForm.get("password")
  
}


onEnviar(event: Event){
  event.preventDefault;
  if(this.registerForm.valid){
    alert("Enviar al servidor...")
    console.log(this.registerForm.value)
    this.Miservicio.AñadirUser(this.registerForm.value).subscribe()
  }else{
    this.registerForm.markAllAsTouched();
    this.invalido = "is-invalid"
  }
}
}
