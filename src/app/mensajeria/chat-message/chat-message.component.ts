import { Component } from '@angular/core';
import {AulaComponent} from "../../aula/aula/aula.component";
import {MessageInputComponent} from "../message-input/message-input.component";
import {ChatWindowComponent} from "../chat-window/chat-window.component";
import {Aula2Component} from "../../aula/aula2/aula2.component";
import {ModalMensajeComponent} from "../modal-mensaje/modal-mensaje.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    AulaComponent,
    MessageInputComponent,
    ChatWindowComponent,
    Aula2Component,
    ModalMensajeComponent,
    NgIf,
  ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {
  selectedUserId: number | null = null;

  onUserSelected(userId: number): void {
    this.selectedUserId = userId;
  }
}
