import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataServiceTsService } from 'src/Servicios/data.service.ts.service';

export const nuevoGuardianGuard: CanActivateFn = (route, state) => {
  return inject(DataServiceTsService).isLoggedIn !== true
  ? inject(Router).navigate(['login'])
  : true
};
