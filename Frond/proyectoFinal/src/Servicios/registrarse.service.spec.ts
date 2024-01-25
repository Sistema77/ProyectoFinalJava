import { TestBed } from '@angular/core/testing';

import { RegistrarseService } from './registrarse.service';

describe('RegistrarseService', () => {
  let service: RegistrarseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
