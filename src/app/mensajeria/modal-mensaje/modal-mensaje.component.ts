import {Component, EventEmitter, Output} from '@angular/core';
import {MensajeRequest, MensajeriaService} from "../../@api/apiMensajes/mensajeria.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal-mensaje',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './modal-mensaje.component.html',
  styleUrl: './modal-mensaje.component.scss'
})
export class ModalMensajeComponent {
  @Output() closeModal = new EventEmitter<void>();

  constructor(private mensajeriaService: MensajeriaService) {
  }
  mensaje: MensajeRequest = {
    asunto: '',
    contenido: '',
    remitenteId: Number(localStorage.getItem('id')),
    nombreDestinatario: '',
  }

  rol:string='No especificado'

  usuarios:string[]=[];

  /*usuariosPorRol: { [key: string]: string[]} = {
    "Maestro": this.usuarioporrol('Profesor'),
    "Estudiante": this.usuarioporrol('Estudiante'),
  };
  usuarioporrol(rol:string): string[]{
    let usuarios: string[]=[]
    if (rol=='Estudiante'){
      this.mensajeriaService.mostrarEstudiantes().subscribe({next: (data: string[])=>{
          usuarios=data
          console.log(usuarios)
          console.log(this.rol)
        },
        error: (error) => {
          console.error('Error en el servidor', error);
        }})
    }
    else if(rol=='Profesor'){
      this.mensajeriaService.mostrarProfesores().subscribe({next: (data: string[])=>{
          usuarios=data
          console.log(usuarios)
          console.log(this.rol)
        },
        error: (error) => {
          console.error('Error en el servidor', error);
        }})
    }
    return usuarios
  }

  sendMensaje(destinatarioId: number): void {
    this.mensaje.destinatarioId = destinatarioId;
    this.mensajeriaService.enviarMensaje(this.mensaje).subscribe({
      next: (response) => {
        console.log('Mensaje enviado con éxito:', response);
        this.closeModal2();
      },
      error: (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    });
  }

  closeModal2(): void {
    this.closeModal.emit();
  }

  actualizarUsuarios() {
    this.usuarios = this.usuariosPorRol[this.rol];
  }

  verRol() {
    console.log(this.rol)
  }*/
  cargarUsuarios(rol: string) {
    if (rol === 'Estudiante') {
      this.mensajeriaService.mostrarEstudiantes().subscribe({
        next: (data: string[]) => {
          this.usuarios = data;
          console.log(this.usuarios);
        },
        error: (error) => {
          console.error('Error al cargar estudiantes', error);
        }
      });
    } else if (rol === 'Maestro') {
      this.mensajeriaService.mostrarProfesores().subscribe({
        next: (data: string[]) => {
          this.usuarios = data;
          console.log(this.usuarios);
        },
        error: (error) => {
          console.error('Error al cargar profesores', error);
        }
      });
    }
  }
  actualizarUsuarios() {
    if (this.rol !== 'No especificado') {
      this.cargarUsuarios(this.rol);
    } else {
      this.usuarios = [];
    }
  }
  sendMensaje(): void {
    this.mensajeriaService.enviarMensaje(this.mensaje).subscribe({
      next: (response) => {
        console.log('Mensaje enviado con Exito:', response);
        this.closeModal2();
      },
      error: (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    });
  }

  closeModal2(): void {
    this.closeModal.emit();
  }
}
