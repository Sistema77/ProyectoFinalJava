import { Component } from '@angular/core';
import { ListaUsuarioService } from 'src/Servicios/lista-usuario.service';
import {MatTableModule} from '@angular/material/table';
import { BaseDatosCrudService } from 'src/Servicios/base-datos-crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  listaElementos: Observable<any[]>;
  
  constructor(private lista:ListaUsuarioService,private db:BaseDatosCrudService){
    this.listaElementos = this.db.getDatos();
  }

  elementoSeleccionado: any;

  seleccionarElemento(elemento: any) {
    this.elementoSeleccionado = elemento;
  }
  
}
