import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioInicioSesionService } from '../../Servicios/ServicioValidacion/servicio-inicio-sesion.service';
import { DataServiceTsService } from 'src/Servicios/data.service.ts.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
 private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  hasUnitNumber = false;
  hide = true;

  constructor(private router: Router, private route: ActivatedRoute, private validaciondni: ServicioInicioSesionService
    , private servicio : DataServiceTsService) {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.router.navigate(['/menu']);
    } else {
      alert('Error en el Formulario');
    }
  }

  login(){
    var email: string = "";
    var password: string = "";
      
    email = this.addressForm.value.email!;
    password = this.addressForm.value.password!;

    this.servicio.SignIn(email, password);

  }

  mandarARegistro() { 
    this.router.navigate(['registro'], { relativeTo: this.route.parent });
  }
}

