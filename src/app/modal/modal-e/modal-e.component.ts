import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CursoDTO, CursoService, InscripcionDTO} from "../../@api/apicurso/curso.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-e',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf
  ],
  templateUrl: './modal-e.component.html',
  styleUrl: './modal-e.component.scss'
})
export class ModalEComponent {
  @Input() isVisible: boolean = false;
  @Input() errorMessage: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<number>();

  courseCode: number= 0;

  onSubmit(): void {
    this.submit.emit(this.courseCode);
  }

  onClose(): void {
    this.close.emit();
  }
}
