import { TestBed } from '@angular/core/testing';

import { DepartamentosMunicipiosService } from './departamentos-municipios.service';

describe('DepartamentosMunicipiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartamentosMunicipiosService = TestBed.get(DepartamentosMunicipiosService);
    expect(service).toBeTruthy();
  });
});
