import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ChatService} from "../../@api/mensajeria/chat.service";
import {ModalMensajeComponent} from "../modal-mensaje/modal-mensaje.component";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ModalMensajeComponent
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  showModal: boolean = false;

  constructor(private chatService: ChatService) {}

  openMessageModal(): void {
    this.showModal = true;
  }

  closeMessageModal(): void {
    this.showModal = false;
  }
}
