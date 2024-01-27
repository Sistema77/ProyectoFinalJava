import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../src/app/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {
  private apiUrl = 'localhost:8080/api';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/usuarios/registrar`;
    return this.http.post(url, usuario);
  }
}
