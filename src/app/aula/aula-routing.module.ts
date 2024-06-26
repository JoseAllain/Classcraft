import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AulaComponent} from "./aula/aula.component";
import {VEstudianteComponent} from "./v-estudiante/v-estudiante.component";
import {VDatosUsuarioComponent} from "./v-datos-usuario/v-datos-usuario.component";
import {VProfesorComponent} from "./v-profesor/v-profesor.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {ProfesorComponent} from "../registro/profesor/profesor.component";
import {VPadreComponent} from "./vpadre/vpadre.component";

const routes: Routes = [
  {path: 'aula', component: AulaComponent},
  {path: 'vdatosusuario', component: VDatosUsuarioComponent},
  {path: 'vistaprofesor', component: VProfesorComponent},
  {path: 'estudiante', component: VEstudianteComponent},
  {path: 'delatllesCurso', component: CourseDetailComponent},
  {path: 'padre', component: VPadreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
