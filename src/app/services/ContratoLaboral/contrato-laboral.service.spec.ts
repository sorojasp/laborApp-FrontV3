import { TestBed } from '@angular/core/testing';

import { ContratoLaboralService } from './contrato-laboral.service';

describe('ContratoLaboralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContratoLaboralService = TestBed.get(ContratoLaboralService);
    expect(service).toBeTruthy();
  });
});
