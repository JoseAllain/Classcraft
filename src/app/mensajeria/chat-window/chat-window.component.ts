import { Component } from '@angular/core';
import {MensajeResponse, MensajeriaService} from "../../@api/apiMensajes/mensajeria.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    NgIf
  ],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent {
  mensajes: MensajeResponse[] = [];
  mensajeSeleccionado: MensajeResponse | null = null;
  userId: number = Number(localStorage.getItem('id')); // Asume que tienes el ID del usuario actual, ajusta según sea necesario
  tipoMensajes: 'recibidos' | 'enviados' = 'recibidos';

  constructor(private mensajeriaService: MensajeriaService) {}

  ngOnInit(): void {
    this.cargarMensajes();
  }

  cargarMensajes(): void {
    const observable = this.tipoMensajes === 'recibidos'
      ? this.mensajeriaService.getMensajesRecibidos(this.userId)
      : this.mensajeriaService.getMensajesEnviados(this.userId);

    observable.subscribe({
      next: (mensajes) => {
        this.mensajes = this.ordenarMensajesPorFecha(mensajes);
      },
      error: (error) => {
        console.error(`Error al cargar los mensajes ${this.tipoMensajes}:`, error);
      }
    });
  }

  ordenarMensajesPorFecha(mensajes: MensajeResponse[]): MensajeResponse[] {
    return mensajes.sort((a, b) => {
      return new Date(b.fechaEnvio).getTime() - new Date(a.fechaEnvio).getTime();
    });
  }

  seleccionarMensaje(mensaje: MensajeResponse): void {
    this.mensajeSeleccionado = mensaje;
  }

  cambiarTipoMensajes(tipo: 'recibidos' | 'enviados'): void {
    this.tipoMensajes = tipo;
    this.mensajeSeleccionado = null;
    this.cargarMensajes();
  }
}
