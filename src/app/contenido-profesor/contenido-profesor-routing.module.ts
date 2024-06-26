import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../public/home/home.component";
import {ContenidoProfesorModule} from "./contenido-profesor.module";
import {ContenidoProfeComponent} from "./contenido-profe/contenido-profe.component";

const routes: Routes = [
  { path: 'contenidoprofe', component: ContenidoProfeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoProfesorRoutingModule { }
