import { TestBed } from '@angular/core/testing';

import { ConflictosService } from './conflictos.service';

describe('ConflictosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConflictosService = TestBed.get(ConflictosService);
    expect(service).toBeTruthy();
  });
});
