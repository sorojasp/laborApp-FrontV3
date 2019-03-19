import { TestBed } from '@angular/core/testing';

import { NoPagoSalarioService } from './no-pago-salario.service';

describe('NoPagoSalarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPagoSalarioService = TestBed.get(NoPagoSalarioService);
    expect(service).toBeTruthy();
  });
});
