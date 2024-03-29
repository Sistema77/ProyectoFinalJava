import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioInicioSesionService } from '../../Servicios/ServicioValidacion/servicio-inicio-sesion.service';
import { Usuario } from '../Models/usuario';
import { RegistrarseService } from '../../Servicios/registrarse.service';
import { DataServiceTsService } from 'src/Servicios/data.service.ts.service'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  // Nuevo Usuario
  nuevoUsuario: Usuario = {
    name: '',
    dni: '',
    lastName: '',
    email: '',
    password: '',
    tlf: '',
    tipoUsuario: ''
  };

    // Verificación de Formulario
    addressForm = this.fb.group({
      dni: [null, [Validators.required, ServicioInicioSesionService.ValidacionDNI()]],
      email: [null, [Validators.required, Validators.email]],
      //foto: [null/*, [Validators.required, this.fileValidator]*/], // Ajusta esto según tus necesidades
      lastName: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      tlf: [null, Validators.required],
    });

    hasUnitNumber = false;
    hide = true;

  //Constructor
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validaciondni: ServicioInicioSesionService,
    private registrarseService: RegistrarseService,
    private service : DataServiceTsService
  ) {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      const dni = this.addressForm.get('dni')?.value as string | undefined;
      const email = this.addressForm.get('email')?.value as string | undefined;
      const lastName = this.addressForm.get('lastName')?.value as string | undefined;
      const name = this.addressForm.get('name')?.value as string | undefined;
      const password = this.addressForm.get('password')?.value as string | undefined;
      const tlf = this.addressForm.get('tlf')?.value as string | undefined;
      const tipoUsuario = "usuario"

      // Asegúrate de que los valores no son undefined antes de intentar asignarlos
      if (dni !== undefined && email !== undefined && lastName !== undefined && name !== undefined && password !== undefined && tlf !== undefined) {
        this.nuevoUsuario = {
          dni,
          email,
          lastName,
          name,
          password,
          tlf,
          tipoUsuario // Si tipoUsuario es undefined, asigna una cadena vacía
        };

        // Llama al método para registrar el usuario
        this.service.SignUp(this.nuevoUsuario)
        .then(() => {
          console.log('ususarioa guardado');
          this.router.navigate(['/login']);
          alert("Registro exitoso");
        })
        .catch((error) => console.error(error));

        //alert('Usuario Registrado Con exito');
        
        
      } else {
        alert('Error en el Formulario');
      }
    } else {
      alert('Error en el Formulario');
    }
  }

  //Registrar al usuario en la BD
  /*registrarUsuario() {
    this.registrarseService.registrarUsuario(this.nuevoUsuario).subscribe(
      (response: any) => {
        console.log('Usuario registrado exitosamente', response);
        
      },
      error => {
        console.error('Error al registrar usuario', error);
      }
    );
  }

  // Comprobar que la foto esta en el formato correcto 
  fileValidator(control: any) {
    const file = control.value;
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const extension = file.name.split('.').pop().toLowerCase();
      if (allowedExtensions.indexOf(extension) === -1) {
        return { invalidFile: true };
      }
    }
    return null;
  }*/
}
