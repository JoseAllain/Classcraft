import { Component, OnInit } from '@angular/core';
import { AulaComponent } from "../aula/aula.component";
import { ModalComponent } from "../../modal/modal/modal.component";
import { HttpClient } from "@angular/common/http";
import { NgForOf, NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { Aula2Component } from "../aula2/aula2.component";
import { RouterLink } from "@angular/router";
import {MisHijos, UsuariosApiService} from "../../@api/apiUsuario/usuario-api.service";
import {CursoDTO, CursoService} from "../../@api/apicurso/curso.service";

@Component({
  selector: 'app-v-padre',
  standalone: true,
  imports: [
    AulaComponent,
    RouterLink,
    ModalComponent,
    NgForOf,
    NgIf,
    Aula2Component
  ],
  templateUrl: './vpadre.component.html',
  styleUrls: ['./vpadre.component.scss']
})
export class VPadreComponent implements OnInit {
  hijos: MisHijos[] = [];
  idPadre: number=0;
  cursosDelHijo: CursoDTO[] = [];

  constructor(private usuarioApiService: UsuariosApiService, private cursoService:CursoService,private router: Router) {}

  ngOnInit() {
    const id = localStorage.getItem('id');
    if (!id) {
      alert('Por favor Inicie Sesion')
      this.router.navigate(['/']);
    }
    this.idPadre = +localStorage.getItem('id')!;
    this.obtenerNombresHijos();
  }

  obtenerNombresHijos() {
    this.usuarioApiService.obtenerNombresHijos(this.idPadre).subscribe({
      next: (nombres) => {
        this.hijos = nombres;
      },
      error: (error) => {
        console.error('Error al obtener nombres de los hijos:', error);
      }
    });
  }

  seleccionarHijo(hijoId: number) {
    this.cursoService.obtenerCursosDeEstudiante(hijoId).subscribe({
      next: (cursos) => {
        this.cursosDelHijo = cursos;
      },
      error: (error) => {
        console.error('Error al cargar los cursos del estudiante:', error);
      }
    });
  }
  /*id = Number(localStorage.getItem('id'))

  isVisible = false;
  errorMessage = '';
  courses: any[] = [];
  validCourseCodes = ['COURSE123', 'COURSE456', 'COURSE789']; // Simulated valid course codes

  ngOnInit() {
    // Inicializa algunos cursos para probar
    this.courses = [
      {
        nombre: 'Curso 1',
        periodo: '2023-2024',
        imagenUrl: 'https://via.placeholder.com/150'
      },
      {
        nombre: 'Curso 2',
        periodo: '2023-2024',
        imagenUrl: 'https://via.placeholder.com/150'
      },
      {
        nombre: 'Curso 3',
        periodo: '2023-2024',
        imagenUrl: 'https://via.placeholder.com/150'
      }
    ];
  }

  mostrarCursos() {
    this.isVisible = !this.isVisible;
  }

  joinCourse(courseCode: string): void {
    if (this.validCourseCodes.includes(courseCode)) {
      const newCourse = {
        nombre: 'Nombre del Curso', // Simulated course name
        periodo: '2023-2024',       // Simulated course period
        imagenUrl: 'https://example.com/imagen-curso.jpg' // Simulated course image URL
      };
      this.courses.push(newCourse);
    } else {
      this.errorMessage = 'Código de curso inválido.';
    }
  }

  constructor(private router: Router) { }

  irAPagina(ruta: string) {
    this.router.navigate([ruta]);
  }*/
}
