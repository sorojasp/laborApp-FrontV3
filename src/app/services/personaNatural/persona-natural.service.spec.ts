import { TestBed } from '@angular/core/testing';

import { PersonaNaturalService } from './persona-natural.service';

describe('PersonaNaturalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonaNaturalService = TestBed.get(PersonaNaturalService);
    expect(service).toBeTruthy();
  });
});
