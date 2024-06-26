import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService, Course, User} from "../../@api/mensajeria/chat.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

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
export class ModalMensajeComponent implements OnInit{
  @Output() closeModal = new EventEmitter<void>();
  message: string = '';
  courses: Course[] = [];
  users: User[] = [];
  asunto: string = ''
  selectedCourse: Course | null = null;
  selectedUser: User | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.courses = this.chatService.getCourses();
  }

  onCourseChange(): void {
    if (this.selectedCourse) {
      this.users = this.selectedCourse.users;
    } else {
      this.users = [];
    }
    this.selectedUser = null; // Clear selected user when course changes
  }

  onNoClick(): void {
    this.closeModal.emit();
  }

  sendMessage(): void {
    if (this.message.trim() && this.selectedUser && this.asunto.trim()) { // Asegúrate de que 'asunto' no esté vacío
      this.chatService.sendMessage(this.selectedUser.id, this.message, this.asunto); // Envía 'asunto' al método sendMessage
      this.closeModal.emit();
    }
  }
  
}