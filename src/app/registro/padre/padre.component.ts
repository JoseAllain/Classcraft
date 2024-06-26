import { Component, OnInit } from '@angular/core';
import {Usuario, UsuariosApiService} from "../../@api/apiUsuario/usuario-api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeneralModule} from "../../general/general.module";
import {Router, RouterLink} from "@angular/router";
import {CommonModule, NgIf} from '@angular/common';
@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [
    RouterLink,
    GeneralModule,
    FormsModule,
    CommonModule,
    NgIf,
  ],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss'
})




export class PadreComponent{
  constructor(public api:UsuariosApiService) {
  }
  padre:Usuario={
    apellido: "",
    clave: "",
    correo: "",
    idpadre: 0,
    nombre: "",
    tipo: "Padre"
  }

  async singup(){

    await this.api.registerUsuario(this.padre)
    alert("Registro Exitoso");
    this.padre={
      apellido: "",
      clave: "",
      correo: "",
      idpadre: 0,
      nombre: "",
      tipo: ""
    }
    window.location.href="usuarios/login"
  }

  validateName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  validarCorreo(correo: string): boolean {
    // Utiliza una expresión regular para validar el correo electrónico
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
  }
  validarContrasena(contrasena: string): boolean {
    const patron = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{5,}$/;
    return patron.test(contrasena);
  }
}
