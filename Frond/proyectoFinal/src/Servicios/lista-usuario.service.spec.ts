import { TestBed } from '@angular/core/testing';

import { ListaUsuarioService } from './lista-usuario.service';

describe('ListaUsuarioService', () => {
  let service: ListaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
