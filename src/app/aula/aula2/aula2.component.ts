import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-aula2',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIf
  ],
  templateUrl: 'aula2.component.html',
  styleUrl: 'aula2.component.scss'
})

export class Aula2Component {
  rol:string|null=localStorage.getItem('rol')
  isLogoutVisible:boolean=false
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
