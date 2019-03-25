import { TestBed } from '@angular/core/testing';

import { FinalDemandaService } from './final-demanda.service';

describe('FinalDemandaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalDemandaService = TestBed.get(FinalDemandaService);
    expect(service).toBeTruthy();
  });
});
