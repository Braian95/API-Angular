import { Component } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/Servicios/servicio-usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
import { AuthtokenService } from 'src/app/Servicios/auth/authtoken.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  invalido=""
  usuariosList:any
  updateForm = this.formBuilder.group({
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

constructor(private Miservicio:ServicioUsuarioService, private formBuilder:FormBuilder, private auth: AuthtokenService, private cookie: CookieService){
  this.ObtenerDatosUser()
}

ObtenerDatosUser(){
  this.Miservicio.ObtenerListadoUser(this.cookie.get("user")).subscribe({
    next:(usuariosActualData)=>{
      this.usuariosList=usuariosActualData
    },
    error:(errorData)=>{
      console.error(errorData)
    }
  })
}

get Nombre(){

  return this.updateForm.get("nombre")

}

get Apellido(){

  return this.updateForm.get("apellido")
  
}

get DNI(){

  return this.updateForm.get("DNI")
  
}

get Ciudad(){

  return this.updateForm.get("ciudad")
  
}

get Provincia(){

  return this.updateForm.get("provincia")
  
}

get Telefono(){

  return this.updateForm.get("telefono")
  
}

get Usuario(){

  return this.updateForm.get("username")
  
}

get Email(){

  return this.updateForm.get("email")
}

get Password(){

  return this.updateForm.get("password")
  
}


onEnviar(event: Event, username:string){
  event.preventDefault;
  if(this.updateForm.valid){
    alert("Enviar al servidor...")
    console.log(this.updateForm.value)
    this.Miservicio.UpdateUser(username,this.updateForm.value).subscribe()
  }else{
    this.updateForm.markAllAsTouched();
    this.invalido = "is-invalid"
  }
}
}