import { TestBed } from '@angular/core/testing';

import { DataServiceTsService } from './data.service.ts.service';

describe('DataServiceTsService', () => {
  let service: DataServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
