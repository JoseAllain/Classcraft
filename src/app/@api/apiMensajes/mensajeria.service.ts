import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {List} from "postcss/lib/list";

export interface MensajeRequest{
  asunto: string,
  contenido: string,
  remitenteId: number,
  nombreDestinatario: string,
}

export interface MensajeResponse {
  asunto: string;
  contenido: string;
  fechaEnvio: string;
  remitente: string;
}
@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {
  private apiUrl = 'http://34.213.134.64:8081/';

  constructor(private http: HttpClient) {}

  enviarMensaje(mensaje: MensajeRequest): Observable<MensajeResponse> {
    return this.http.post<MensajeResponse>(`${this.apiUrl}mensajeria/enviar`, mensaje);
  }

  getMensajesRecibidos(idUsuario:number): Observable<MensajeResponse[]> {
    return this.http.get<MensajeResponse[]>(`${this.apiUrl}mensajeria/ver/recibidos/${idUsuario}`);
  }

  getMensajesEnviados(id: number): Observable<MensajeResponse[]> {
    return this.http.get<MensajeResponse[]>(`${this.apiUrl}mensajeria/ver/enviados/${id}`);
  }

  mostrarProfesores():Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}profesores/nombres`);
  }

  mostrarEstudiantes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}estudiantes/nombres`);
  }
}
