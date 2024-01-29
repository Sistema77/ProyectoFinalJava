import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../src/app/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {
 
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: Usuario) {
    const url = `${this.apiUrl}/registrar`;
    return this.http.post(url, usuario);
  }
}
