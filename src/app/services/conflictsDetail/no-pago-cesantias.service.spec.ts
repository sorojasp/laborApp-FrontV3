import { TestBed } from '@angular/core/testing';

import { NoPagoCesantiasService } from './no-pago-cesantias.service';

describe('NoPagoCesantiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPagoCesantiasService = TestBed.get(NoPagoCesantiasService);
    expect(service).toBeTruthy();
  });
});
