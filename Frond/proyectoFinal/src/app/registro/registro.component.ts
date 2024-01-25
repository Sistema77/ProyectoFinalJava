import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioInicioSesionService } from '../../Servicios/ServicioValidacion/servicio-inicio-sesion.service';
import { Usuario } from '../Models/usuario';
import { RegistrarseService } from '../../Servicios/registrarse.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nuevoUsuario: Usuario = {
    id_usuario: 0,
    name: '',
    dni: '',
    lastName: '',
    email: '',
    password: '',
    tlf: '',
    foto: new Uint8Array(), // Ajusta según sea necesario
    tipoUsuario: ''
  };


  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    dni: [null, Validators.required, [ServicioInicioSesionService.ValidacionDNI()]],
    email: [null, Validators.required, Validators.email],
    //foto: [null, Validators.required],
    lastName: [null, Validators.required],
    name: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]],
    //tipousuario: [null, Validators.required],
    tlf: [null, Validators.required],
  });

  hasUnitNumber = false;
  hide=true;

  constructor(private router: Router, private validaciondni: ServicioInicioSesionService,private RegistrarseService: RegistrarseService) {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.router.navigate(['/login']);
    } else {
      alert('Error en el Formulario');
    }
  }

  registrarUsuario() {
    this.RegistrarseService.registrarUsuario(this.nuevoUsuario).subscribe(
      response => {
        console.log('Usuario registrado exitosamente', response);
        // Puedes redirigir al usuario a otra página o realizar otras acciones después del registro
      },
      error => {
        console.error('Error al registrar usuario', error);
      }
    );
  }
}
