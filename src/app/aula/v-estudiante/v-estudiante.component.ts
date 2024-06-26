import { Component, OnInit } from '@angular/core';
import { CursoService, CursoDTO, InscripcionDTO } from '../../@api/apicurso/curso.service';
import { Router } from '@angular/router';
import {AulaComponent} from "../aula/aula.component";
import {ModalComponent} from "../../modal/modal/modal.component";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {Aula2Component} from "../aula2/aula2.component";
import {ModalEComponent} from "../../modal/modal-e/modal-e.component";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-v-estudiante',
  templateUrl: './v-estudiante.component.html',
  styleUrls: ['./v-estudiante.component.scss'],
  standalone: true,
  imports: [AulaComponent, ModalComponent, CommonModule, NgIf, NgForOf, Aula2Component, ModalEComponent],
})
export class VEstudianteComponent implements OnInit {
  isVisible = false;
  cursos: CursoDTO[] = [];
  errorMessage: string = '';

  constructor(private router: Router, private cursoService: CursoService) { }

  ngOnInit() {
    this.cargarCursos();
  }

  cargarCursos() {
    const estudianteId = Number (localStorage.getItem('id')); // Reemplaza esto con la forma de obtener el ID del estudiante actual
    this.cursoService.obtenerCursosDeEstudiante(estudianteId).subscribe(
      (cursos) => {
        this.cursos = cursos;
      },
      (error) => {
        console.error('Error al cargar los cursos:', error);
      }
    );
  }


  closeModal(): void {
    this.isVisible = false;
    this.errorMessage = '';
  }

  joinCourse(courseId: number): void {
    const estudianteId = Number (localStorage.getItem('id')); // Reemplaza esto con la forma de obtener el ID del estudiante actual

    const inscripcion: InscripcionDTO = {
      estudianteId: estudianteId,
      cursoId: Number(courseId)
    };

    this.cursoService.registrarEstudianteEnCurso(inscripcion).subscribe(
      (error) => {
        console.error(error)
        this.errorMessage = 'Error al inscribirse en el curso.';
        console.log('Inscripción exitosa:', error);
      },
      (response) => {
        console.log('Inscripción exitosa:', response);
        this.cargarCursos();
        this.closeModal();
      }
    );
  }


  irAPagina(ruta: string) {
    this.router.navigate([ruta]);
  }
  showModal(): void {
    this.isVisible = true;
  }
}
