import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceTsService } from 'src/Servicios/data.service.ts.service';
import { DatosFormularios } from '../Models/datosFormulario';
import { BaseDatosCrudService } from 'src/Servicios/base-datos-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-simulador-credito',
  templateUrl: './simulador-credito.component.html',
  styleUrls: ['./simulador-credito.component.css']
})
export class SimuladorCreditoComponent {

  datosFormulario : DatosFormularios = {
    company: "",
    firstName: "",
    lastName: "",
    money: 0,
    city: "",
    state: "",
    postalCode: 0
  };
  
  addressForm = this.fb.group({
  company: null,
  firstName: [null, Validators.required],
  lastName: [null, Validators.required],
  money: [null, Validators.required],
  city: [null, Validators.required],
  state: [null, Validators.required],
  postalCode: [null, Validators.required],
  });

  constructor(private crudFire : BaseDatosCrudService,private router: Router, private fb : FormBuilder){}
  states = [
    {name: 'Almería', abbreviation: 'AL'},
    {name: 'Cádiz', abbreviation: 'CA'},
    {name: 'Córdoba', abbreviation: 'CO'},
    {name: 'Granada', abbreviation: 'GR'},
    {name: 'Huelva', abbreviation: 'HU'},
    {name: 'Jaén', abbreviation: 'JA'},
    {name: 'Málaga', abbreviation: 'MA'},
    {name: 'Sevilla', abbreviation: 'SE'}
  ];
  

  onSubmit(): void {
    
    
    const company = this.addressForm.get('company')?.value as string | undefined;
    const firstName = this.addressForm.get('firstName')?.value as string | undefined;
    const lastName = this.addressForm.get('lastName')?.value as string | undefined;
    const money = this.addressForm.get('money')?.value as number | undefined;
    const city = this.addressForm.get('city')?.value as string | undefined;
    const state = this.addressForm.get('state')?.value as string | undefined;
    const postalCode = this.addressForm.get('postalCode')?.value as number | undefined;

    if (company !== undefined && firstName !== undefined && lastName !== undefined && 
      money !== undefined && city !== undefined && state !== undefined && 
      postalCode !== undefined) {
      
        this.datosFormulario = {
          company,
          firstName,
          lastName,
          money,
          city,
          state,
          postalCode
        }

        this.crudFire.guardarDatos(this.datosFormulario)
        .then(() => {
          alert('Crédito enviado');
          this.router.navigate(['/menu/grafica']); // FALLA //Redirige a otra página cuando la operación sea exitosa
        })
        .catch((error) => {
          alert('Error');
        });
    }
  }
}
