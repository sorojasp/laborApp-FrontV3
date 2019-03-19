import { TestBed } from '@angular/core/testing';

import { DespidoSJCService } from './despido-sjc.service';

describe('DespidoSJCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespidoSJCService = TestBed.get(DespidoSJCService);
    expect(service).toBeTruthy();
  });
});
