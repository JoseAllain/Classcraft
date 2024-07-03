import { Component, OnInit } from '@angular/core';
import {CursoService, CursoDTO, CursoDTOCrear, CursoResponse} from '../../@api/apicurso/curso.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../modal/modal/modal.component';
import { AulaComponent } from '../aula/aula.component';
import { Aula2Component} from '../aula2/aula2.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-v-profesor',
  templateUrl: './v-profesor.component.html',
  styleUrls: ['./v-profesor.component.scss'],
  standalone: true,
  imports:[AulaComponent,ModalComponent,CommonModule,NgIf,NgForOf,Aula2Component],
})
export class VProfesorComponent implements OnInit {
  isModalVisible: boolean = false;
  cursos: CursoDTO[] = [];
  cursoNuevo: CursoDTOCrear  = {
    nombre: "",
    descripcion: "",
    maestroId: 0,
  };

  cursosver: CursoResponse[] = [];

  constructor(private router: Router, private cursoService: CursoService) { }

  ngOnInit() {
    const id = localStorage.getItem('id');
    if (!id) {
      alert('Por favor Inicie Sesion')
      this.router.navigate(['/']);
    }
    this.cargarCursos();
  }

  cargarCursos() {
    const maestroId = Number (localStorage.getItem('id')); // Reemplaza esto con la forma de obtener el ID del maestro actual, posiblemente desde la autenticación
    this.cursoService.obtenerCursosDeMaestro(maestroId).subscribe(
      (cursos) => {
        this.cursos = cursos;
      },
      (error) => {
        console.error('Error al cargar los cursos:', error);
      }
    );
    console.log(this.cursos)
  }

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  /*addCourse(courseData: CursoDTO): void {
    this.cursos.push(courseData);
    this.closeModal();
  }*/

  addCourse(cursocrear: CursoDTOCrear): void {
    this.cursoNuevo.maestroId=cursocrear.maestroId;
    this.cursoNuevo.nombre=cursocrear.nombre;
    this.cursoNuevo.descripcion=cursocrear.descripcion;
    this.cursoService.crearCurso(this.cursoNuevo).subscribe({
      next: (curso) => {
        this.cursosver.push(curso);
        this.cargarCursos()
        this.closeModal();
      },
      error: (err) => {
        console.error('Error al crear el curso:', err);
      }
    });
  }

  irAPagina(ruta: string) {
    this.router.navigate([ruta]);
  }
}
