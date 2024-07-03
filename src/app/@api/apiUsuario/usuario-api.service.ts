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

export interface MisHijos{
  nombre: string,
  id:number,
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosApiService {
  httpClient = inject(HttpClient)

  async registerUsuario(user:Usuario) {

    let ususarioC={
      correo: user.correo,
      nombre: user.nombre+' '+user.apellido,
      contrasena: user.clave,
      idPadre: user.idpadre,
      tipo: user.tipo
    }
    console.log(ususarioC)
    return lastValueFrom(this.httpClient.post<UsuarioResponse>('http://34.213.134.64:8081/registro',ususarioC))
  }

  async loginUsuario(user: UsuarioLogin) {
    return lastValueFrom(this.httpClient.post<UsuarioResponse>('http://34.213.134.64:8081/login',user));
  }

  cambiarClave(idUsuario: number, claveActual: string, nuevaClave: string): Observable<any> {
    return this.httpClient.put(`http://34.213.134.64:8081/cambiarClave/${idUsuario}`, {
      claveActual: claveActual,
      nuevaClave: nuevaClave
    });
  }
  obtenerNombresHijos(padreId: number): Observable<MisHijos[]> {
    return this.httpClient.get<MisHijos[]>(`http://34.213.134.64:8081/${padreId}/hijos/nombres`);
  }

}
