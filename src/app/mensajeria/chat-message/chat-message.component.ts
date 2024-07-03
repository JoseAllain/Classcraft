import {Component, OnInit} from '@angular/core';
import {Aula2Component} from "../../aula/aula2/aula2.component";
import {MessageInputComponent} from "../message-input/message-input.component";
import {ChatWindowComponent} from "../chat-window/chat-window.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    Aula2Component,
    MessageInputComponent,
    ChatWindowComponent
  ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent implements OnInit{
  constructor(private router:Router) {
  }

  ngOnInit() {
    const id = localStorage.getItem('id');
    if (!id) {
      alert('Por favor Inicie Sesion')
      this.router.navigate(['/']);
    }
  }

  selectedUserId: number | null = null;

  onUserSelected(userId: number): void {
    this.selectedUserId = userId;
  }
}
