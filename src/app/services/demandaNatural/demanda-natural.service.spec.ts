import { TestBed } from '@angular/core/testing';

import { DemandaNaturalService } from './demanda-natural.service';

describe('DemandaNaturalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandaNaturalService = TestBed.get(DemandaNaturalService);
    expect(service).toBeTruthy();
  });
});
