import { Component } from '@angular/core';
import {AulaComponent} from "../aula/aula.component";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {UsuariosApiService} from "../../@api/apiUsuario/usuario-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-v-datos-usuario',
  standalone: true,
  imports: [
    AulaComponent,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './v-datos-usuario.component.html',
  styleUrl: './v-datos-usuario.component.scss'
})
export class VDatosUsuarioComponent {
  constructor(private usuarioApiService: UsuariosApiService) {}

  user = {
    photoUrl: 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg',  // Cambia esto a la URL de tu foto
    name: localStorage.getItem('nombre'),
    email: localStorage.getItem('correo')
  };

  isModalOpen = false;
  currentPassword = '';
  newPassword = '';

  openChangePasswordModal() {
    this.isModalOpen = true;
  }

  closeChangePasswordModal() {
    this.isModalOpen = false;
  }

  changePassword(): void {
    this.usuarioApiService.cambiarClave( Number (localStorage.getItem('id')), this.currentPassword, this.newPassword).subscribe({
      error: (err )=> {
        console.log('Password changed successfully');
        this.closeChangePasswordModal();
      }
    });
  }

  verId() {
    return localStorage.getItem('id')
  }
}
