import { TestBed } from '@angular/core/testing';

import { DemandaJuridicaService } from './demanda-juridica.service';

describe('DemandaJuridicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandaJuridicaService = TestBed.get(DemandaJuridicaService);
    expect(service).toBeTruthy();
  });
});
