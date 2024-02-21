import { Component, Input } from '@angular/core';
import { ListaUsuarioService } from 'src/Servicios/lista-usuario.service';

@Component({
  selector: 'app-usuario-hijo',
  templateUrl: './usuario-hijo.component.html',
  styleUrls: ['./usuario-hijo.component.css']
})
export class UsuarioHijoComponent {
  @Input() elementoSeleccionado: any;

}
