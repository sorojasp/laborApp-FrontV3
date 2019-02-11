import { TestBed } from '@angular/core/testing';

import { DemandaPdfService } from './demanda-pdf.service';

describe('DemandaPdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandaPdfService = TestBed.get(DemandaPdfService);
    expect(service).toBeTruthy();
  });
});
