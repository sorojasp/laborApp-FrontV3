import { TestBed } from '@angular/core/testing';

import { NoPagoPrimaService } from './no-pago-prima.service';

describe('NoPagoPrimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoPagoPrimaService = TestBed.get(NoPagoPrimaService);
    expect(service).toBeTruthy();
  });
});
