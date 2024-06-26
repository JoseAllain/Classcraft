import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'; // Asegúrate de ajustar la ruta según tu estructura


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginComponent
  ]
})
export class UsuariosModule { }
