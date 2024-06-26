import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {lastValueFrom, Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

export interface UsuarioResponse {
  correo: string;
  nombre: string;
  rol: string;
  contrasena: string;
  id: number;
}

export interface UsuarioLogin {
  correo: string;
  contrasena: string;
}



export interface Usuario{
  correo: string,
  nombre: string,
  apellido:string,
  clave:string,
  idpadre:number,
  tipo:string
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosApiService {
  httpClient = inject(HttpClient)

  async listarUsuarios() {
    return lastValueFrom(this.httpClient.get<UsuarioResponse[]>('http://localhost:8080/listar'));
  }

  async registerUsuario(user:Usuario) {

    let ususarioC={
      correo: user.correo,
      nombre: user.nombre+' '+user.apellido,
      contrasena: user.clave,
      idPadre: user.idpadre,
      tipo: user.tipo
    }
    console.log(ususarioC)
    return lastValueFrom(this.httpClient.post<UsuarioResponse>('http://35.91.182.170/registro',ususarioC))
  }

  async loginUsuario(user: UsuarioLogin) {
    return lastValueFrom(this.httpClient.post<UsuarioResponse>('http://35.91.182.170/login',user));
  }

  cambiarClave(idUsuario: number, claveActual: string, nuevaClave: string): Observable<any> {
    return this.httpClient.put(`http://35.91.182.170/cambiarClave/${idUsuario}`, {
      claveActual: claveActual,
      nuevaClave: nuevaClave
    });
  }
}
