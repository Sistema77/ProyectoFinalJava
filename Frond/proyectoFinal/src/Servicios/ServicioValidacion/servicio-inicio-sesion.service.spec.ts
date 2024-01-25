import { TestBed } from '@angular/core/testing';

import { ServicioInicioSesionService } from './servicio-inicio-sesion.service';

describe('ServicioInicioSesionService', () => {
  let service: ServicioInicioSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInicioSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
