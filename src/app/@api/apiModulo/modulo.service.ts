import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ModuloRequest{
  titulo: string
}

export interface ModuloCursoResponse{
  titulo: string
  id: number
}

@Injectable({
  providedIn: 'root'
})

export class ModuloService {
  private apiUrl = 'http://34.213.134.64:8081';

  constructor(private http: HttpClient) {}

  crearModulo(id: number, modulo: ModuloRequest): Observable<ModuloCursoResponse> {
    return this.http.post<ModuloCursoResponse>(`${this.apiUrl}/modulo/crear/${id}`, modulo);
  }

  verModulo(idCurso: number): Observable<ModuloCursoResponse[]> {
    return this.http.get<ModuloCursoResponse[]>(`${this.apiUrl}/modulo/ver/${idCurso}`);
  }
}
