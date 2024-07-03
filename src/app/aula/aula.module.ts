import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaRoutingModule } from './aula-routing.module';
import {VProfesorComponent} from "./v-profesor/v-profesor.component";
import {AulaComponent} from "./aula/aula.component";
import {ModalComponent} from "../modal/modal/modal.component";
import {Aula2Component} from "./aula2/aula2.component";
import {AngularCompilation} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation";
import {VEstudianteComponent} from "./v-estudiante/v-estudiante.component";
import {ContenidoProfeComponent} from "../contenido-profesor/contenido-profe/contenido-profe.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AulaRoutingModule,
    ModalComponent,
    VProfesorComponent,
    VEstudianteComponent,
  ]
})
export class AulaModule { }
