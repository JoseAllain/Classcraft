import { Component, OnInit } from '@angular/core';
import {UsuarioLogin, UsuariosApiService} from "../../@api/apiUsuario/usuario-api.service";
import {Router} from "@angular/router";
import {RouterLink} from "@angular/router";
import {AbstractControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeneralModule} from "../../general/general.module";
import { CommonModule } from '@angular/common';
import {userInfo} from "os";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, GeneralModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent{
  constructor(public api:UsuariosApiService, public router:Router) {
  }

  usuario:UsuarioLogin={
    correo: "",
    contrasena: "",
  }

  async iniciarSesion(){
    let result = await this.api.loginUsuario(this.usuario);
    try{
      if(result){
        alert("Login exitoso");
        console.log(result);
        localStorage.setItem('nombre', result.nombre);
        localStorage.setItem('rol', result.rol);
        localStorage.setItem('contraseña', result.contrasena);
        localStorage.setItem('correo', result.correo);
        localStorage.setItem('id', String(result.id));
        switch (result.rol) {
          case 'Padre':
            this.router.navigate(['/aula/padre']);
            break;
          case 'Maestro':
            this.router.navigate(['/aula/vistaprofesor']);
            break;
          case 'Estudiante':
            this.router.navigate(['/aula/estudiante']);
            break;
          default:
            this.router.navigate(['']);
            break;
        }
      }else{
        console.error("Credenciales incorrectas.");
        alert("Credenciales incorrectas.")
      }
    }catch(error){
      alert("Error en el servidor");
      console.error("Error en el servidor:", error);
    }
  }
}
