import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoProfesorRoutingModule } from './contenido-profesor-routing.module';
import {ContenidoProfeComponent} from "./contenido-profe/contenido-profe.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContenidoProfesorRoutingModule,
    ContenidoProfeComponent
  ]
})
export class ContenidoProfesorModule { }
