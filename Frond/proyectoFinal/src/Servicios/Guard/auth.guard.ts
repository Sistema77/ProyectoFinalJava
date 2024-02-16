import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataServiceTsService } from '../data.service.ts.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const dst = inject(DataServiceTsService);

  return dst.isLoggedIn
  ? true
  : inject(Router).createUrlTree(["/login"]);

};
