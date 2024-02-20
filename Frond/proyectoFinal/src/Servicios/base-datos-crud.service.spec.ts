import { TestBed } from '@angular/core/testing';

import { BaseDatosCrudService } from './base-datos-crud.service';

describe('BaseDatosCrudService', () => {
  let service: BaseDatosCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
