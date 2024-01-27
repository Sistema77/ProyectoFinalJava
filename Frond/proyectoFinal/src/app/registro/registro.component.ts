import { Component } from '@angular/core';
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
    name: '',
    dni: '',
    lastName: '',
    email: '',
    password: '',
    tlf: '',
    foto: new Uint8Array(),
    tipoUsuario: ''
  };

  addressForm = this.fb.group({
    dni: [null, [Validators.required], [ServicioInicioSesionService.ValidacionDNI()]],
    email: [null, [Validators.required, Validators.email]],
    foto: [null, Validators.required], // Ajusta esto según tus necesidades
    lastName: [null, Validators.required],
    name: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]],
    tipoUsuario: [null, Validators.required], // Ajusta esto según tus necesidades
    tlf: [null, Validators.required],
  });

  hasUnitNumber = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validaciondni: ServicioInicioSesionService,
    private registrarseService: RegistrarseService
  ) {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      const dni = this.addressForm.get('dni')?.value as string | undefined;
      const email = this.addressForm.get('email')?.value as string | undefined;
      const lastName = this.addressForm.get('lastName')?.value as string | undefined;
      const name = this.addressForm.get('name')?.value as string | undefined;
      const password = this.addressForm.get('password')?.value as string | undefined;
      const tlf = this.addressForm.get('tlf')?.value as string | undefined;
      const foto = this.addressForm.get('foto')?.value as Uint8Array | undefined; // Ajusta esto según tus necesidades
      const tipoUsuario = this.addressForm.get('tipoUsuario')?.value as string | undefined; // Ajusta esto según tus necesidades

      // Asegúrate de que los valores no son undefined antes de intentar asignarlos
      if (dni !== undefined && email !== undefined && lastName !== undefined && name !== undefined && password !== undefined && tlf !== undefined) {
        this.nuevoUsuario = {
          dni,
          email,
          lastName,
          name,
          password,
          tlf,
          foto: foto || new Uint8Array(), // Si foto es undefined, asigna un nuevo Uint8Array()
          tipoUsuario: tipoUsuario || '' // Si tipoUsuario es undefined, asigna una cadena vacía
        };

        // Llama al método para registrar el usuario
        this.registrarUsuario();
      } else {
        alert('Error en el Formulario');
      }
    } else {
      alert('Error en el Formulario');
    }
  }

  registrarUsuario() {
    this.registrarseService.registrarUsuario(this.nuevoUsuario).subscribe(
      response => {
        console.log('Usuario registrado exitosamente', response);
        
      },
      error => {
        console.error('Error al registrar usuario', error);
      }
    );
  }
}
