import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    dni: [null, Validators.required],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;
  hide = true;

  onSubmit(): void {
    alert('Thanks!');
  }
  
}

