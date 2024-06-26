import { Component, OnInit } from '@angular/core';
import {Usuario, UsuariosApiService} from "../../@api/apiUsuario/usuario-api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeneralModule} from "../../general/general.module";
import {Router, RouterLink} from "@angular/router";
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import {CommonModule, NgIf} from '@angular/common';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    RouterLink,
    GeneralModule,
    FormsModule,
    CommonModule,
    NgIf,
  ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent {


  constructor(public api:UsuariosApiService) {
  }
  estudiante:Usuario={
    apellido: "",
    clave: "",
    correo: "",
    idpadre: 0,
    nombre: "",
    tipo: "Estudiante"
  }

  async singup(){

    await this.api.registerUsuario(this.estudiante)
    alert("Registro Exitoso");
    this.estudiante={
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
