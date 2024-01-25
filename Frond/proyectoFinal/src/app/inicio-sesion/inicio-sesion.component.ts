import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioInicioSesionService } from '../../Servicios/ServicioValidacion/servicio-inicio-sesion.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
 private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    dni: [null, [ServicioInicioSesionService.ValidacionDNI()]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  hasUnitNumber = false;
  hide = true;

  constructor(private router: Router, private validaciondni: ServicioInicioSesionService) {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.router.navigate(['/menu']);
    } else {
      alert('Error en el Formulario');
    }
  }
}

