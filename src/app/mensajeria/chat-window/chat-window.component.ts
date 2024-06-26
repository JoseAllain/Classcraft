import { Component, OnInit } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import { ChatService, Message, User } from "../../@api/mensajeria/chat.service";
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DatePipe,
    DropdownMenuComponent,
  ],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'] // Corrección aquí, era 'styleUrl'
})
export class ChatWindowComponent implements OnInit {
  selectedUser: User | null = null;
  allMessages: { user: User, messages: Message[] }[] = [];
  sentMessages: Message[] = [];
  showSentMessages: boolean = false;
  selectedMessage: Message | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.selectedUser$.subscribe(user => {
      this.selectedUser = user;
      if (user) {
        this.chatService.getMessages(user.id).subscribe(messages => {
          this.sentMessages = messages;
        });
      }
    });

    this.chatService.getAllMessages().subscribe(allMessages => {
      this.allMessages = allMessages;
    });
  }

  onMenuOptionSelected(option: string): void {
    if (option === 'sent' && this.selectedUser) {
      this.chatService.getSentMessages(this.selectedUser.id).subscribe(messages => {
        this.sentMessages = messages;
        this.showSentMessages = true;
      });
    } else {
      this.showSentMessages = false;
    }
  }

  selectMessage(message: Message): void {
    this.selectedMessage = {
      ...message,
      asunto: message.asunto, // Asegúrate de asignar correctamente el campo asunto
    };
  }

  deleteMessage(userId: string, messageId: string): void {
    this.chatService.deleteMessage(userId, messageId);
    // Aquí podrías actualizar sentMessages u otras propiedades si es necesario
  }
}