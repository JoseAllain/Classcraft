import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../public/home/home.component";
import {MainComponent} from "./main/main.component";
import {EstudianteComponent} from "./estudiante/estudiante.component";
import {PadreComponent} from "./padre/padre.component";
import {ProfesorComponent} from "./profesor/profesor.component";

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
  },
  {
    path: 'estudiante',
    component:EstudianteComponent
  },
  {
    path: 'padre',
    component:PadreComponent
  },
  {
    path: 'profesor',
    component:ProfesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
