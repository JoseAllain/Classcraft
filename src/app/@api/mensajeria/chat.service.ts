import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Exportar las interfaces
export interface User {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  asunto: string;
  user?: User;
}

export interface Course {
  id: string;
  name: string;
  users: User[];
}

interface Messages {
  [userId: string]: Message[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private courses: Course[] = [
    {
      id: '1',
      name: 'Course One',
      users: [
        { id: '1', name: 'User One' },
        { id: '2', name: 'User Two' },
      ],
    },
    {
      id: '2',
      name: 'Course Two',
      users: [
        { id: '3', name: 'User Three' },
        { id: '4', name: 'User Four' },
      ],
    },
    // Añade más cursos y usuarios si es necesario
  ];

  private messages: Messages = {};
  private selectedCourseSubject = new BehaviorSubject<Course | null>(null);
  private selectedUserSubject = new BehaviorSubject<User | null>(null);

  selectedCourse$ = this.selectedCourseSubject.asObservable();
  selectedUser$ = this.selectedUserSubject.asObservable();

  constructor() {
    this.loadMessages();
  }

  private loadMessages() {
    const storedMessages = localStorage.getItem('messages');
    this.messages = storedMessages ? JSON.parse(storedMessages) : {};
  }

  private saveMessages() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  getCourses(): Course[] {
    return this.courses;
  }

  selectCourse(course: Course): void {
    this.selectedCourseSubject.next(course);
  }

  selectUser(user: User): void {
    this.selectedUserSubject.next(user);
  }

  getMessages(userId: string): Observable<Message[]> {
    return new BehaviorSubject(this.messages[userId] || []);
  }

  sendMessage(userId: string, message: string, asunto: string): void {
    if (!this.messages[userId]) {
      this.messages[userId] = [];
    }
    this.messages[userId].push({
      text: message,
      timestamp: new Date(),
      asunto: asunto,
      id: ''
    });
    this.saveMessages();
  }

  getAllMessages(): Observable<{ user: User, messages: Message[] }[]> {
    const allMessages = Object.keys(this.messages).map(userId => {
      const user = this.getUserById(userId);
      if (user) {
        return { user, messages: this.messages[userId] || [] };
      }
      return null; // Return null if user is not found
    }).filter(item => item !== null) as { user: User, messages: Message[] }[]; // Filter out null values
    return new BehaviorSubject(allMessages);
  }

  getSentMessages(userId: string): Observable<Message[]> {
    return new BehaviorSubject(this.messages[userId] || []);
  }

  private getUserById(userId: string): User | undefined {
    for (const course of this.courses) {
      const user = course.users.find(u => u.id === userId);
      if (user) {
        return user;
      }
    }
    return undefined;
  }

  deleteMessage(userId: string, messageId: string): void {
    if (this.messages[userId]) {
      this.messages[userId] = this.messages[userId].filter(message => message.id !== messageId);
      this.saveMessages(); // Guarda los mensajes actualizados si es necesario
    }
  }

}