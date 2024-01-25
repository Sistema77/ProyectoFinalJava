import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicioInicioSesionService {
  static ValidacionDNI(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;

      if (!value) {
        return null;
      }

      const dniRegex = /^[0-9]{8}[a-zA-Z]$/;

      return dniRegex.test(value) ? null : { invalidDni: true };
    };
  }
}
