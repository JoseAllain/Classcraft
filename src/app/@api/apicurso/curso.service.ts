import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CursoDTO {
  cursoId: number;
  nombre: string;
  descripcion: string;
  maestroId: number;
}

export interface CursoResponse {
  idCurso: number;
  nombre: string;
  descripcion: string;
}

export interface CursoDTOCrear {
  nombre: string;
  descripcion: string;
  maestroId: number;
}
export interface InscripcionDTO {
  estudianteId: number;
  cursoId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://35.91.182.170';

  constructor(private http: HttpClient) { }

  obtenerCursosDeMaestro(maestroId: number): Observable<CursoDTO[]> {
    return this.http.get<CursoDTO[]>(`${this.apiUrl}/maestro/${maestroId}/cursos`);
  }

  obtenerCursosDeEstudiante(estudianteId: number): Observable<CursoDTO[]> {
    return this.http.get<CursoDTO[]>(`${this.apiUrl}/estudiante/${estudianteId}/cursos`);
  }

  registrarEstudianteEnCurso(inscripcion: InscripcionDTO): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/Inscripcion`,inscripcion);
  }

  crearCurso(cursoDTOc: CursoDTOCrear): Observable<CursoResponse> {
    return this.http.post<CursoResponse>(`${this.apiUrl}/curso`, cursoDTOc);
  }
}
