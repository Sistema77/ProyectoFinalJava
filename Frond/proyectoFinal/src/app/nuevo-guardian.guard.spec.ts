import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nuevoGuardianGuard } from './nuevo-guardian.guard';

describe('nuevoGuardianGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nuevoGuardianGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
