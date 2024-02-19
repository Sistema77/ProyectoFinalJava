import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { DataServiceTsService } from 'src/Servicios/data.service.ts.service';

@Component({
  selector: 'app-barra-lateral-componete',
  templateUrl: './barra-lateral-componete.component.html',
  styleUrls: ['./barra-lateral-componete.component.css']
})
export class BarraLateralComponeteComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private servicio = inject(DataServiceTsService);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    cerrarSesion(){
      this.servicio.SignOut();
    }
}
