import { Component } from '@angular/core';
import { ListaUsuarioService } from 'src/Servicios/lista-usuario.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  users: any[] | undefined;

  constructor(private lista:ListaUsuarioService){}

  ngOnInit(): void {
    this.lista.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  
}
