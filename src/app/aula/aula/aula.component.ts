import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIf
  ],
  templateUrl: 'aula.component.html',
  styleUrl: 'aula.component.scss'
})
export class AulaComponent {

  protected readonly localStorage = localStorage;

  rol:string|null=localStorage.getItem('rol')

  isLogoutVisible = false;

  cargarRuta(){
    let ruta: string=''
    if (this.rol=='Maestro'){
      ruta='/aula/vistaprofesor'
    }

    else if (this.rol=='Estudiante'){
      ruta='/aula/estudiante'
    }

    else if (this.rol=='Padre'){
      ruta='/aula/padre'
    }
    return ruta
  }

  showLogoutModal() {
    this.isLogoutVisible = true;
  }
  hideLogoutModal() {
    this.isLogoutVisible = false;
  }

  confirmLogout(){
    localStorage.clear()
    window.location.href="/"
  }

}
