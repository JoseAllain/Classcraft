import { Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CursoDTOCrear} from "../../@api/apicurso/curso.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<CursoDTOCrear>();

  courseName: string = '';
  descripcion: string = '';
  image: File | null = null;

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

  onSubmit(): void {
    this.submit.emit({
      nombre: this.courseName,
      descripcion: this.descripcion,
      maestroId: Number (localStorage.getItem('id'))
    });

    // Limpiar los campos del formulario después de emitir el evento
    this.courseName = '';
    this.descripcion = '';
    this.image = null;

    // Cerrar el modal automáticamente después de enviar el formulario
    this.onClose();
  }

  onClose(): void {
    this.close.emit();
  }
}
