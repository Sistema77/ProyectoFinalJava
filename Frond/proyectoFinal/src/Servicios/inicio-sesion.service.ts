import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from 'src/app/Models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getUsuarios():Observable<Usuario[]>{
    const url = `${this.apiUrl}/usuarios`;
    return this.http.get<Usuario[]>(url);
  }

  siExisteUsuario(usuario:Usuario){
    let esExiste = false;

    this.getUsuarios().subscribe((listaUsuario: Usuario[]) => {

      for (let i = 0; i < listaUsuario.length; i++) {
        if (listaUsuario[i].dni == usuario.dni) {
          esExiste = true;
          break; 
        }
      }
      
    });

    return esExiste;
  }
}
