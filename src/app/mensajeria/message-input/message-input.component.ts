import {Component, EventEmitter, Output} from '@angular/core';
import {ModalMensajeComponent} from "../modal-mensaje/modal-mensaje.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    ModalMensajeComponent,
    NgIf
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  @Output() cambiartipo = new EventEmitter<string>();
  showModal: boolean = false;

  constructor() {}

  openMessageModal(): void {
    this.showModal = true;
  }

  closeMessageModal(): void {
    this.showModal = false;
  }

  cambiarTipo(tipo:string): void {
    this.cambiartipo.emit(tipo);
  }
}
