import { TestBed } from '@angular/core/testing';

import { NoPagoVacacionesService } from './no-pago-vacaciones.service';

describe('NoPagoVacacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPagoVacacionesService = TestBed.get(NoPagoVacacionesService);
    expect(service).toBeTruthy();
  });
});
