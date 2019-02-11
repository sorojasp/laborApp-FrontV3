import { TestBed } from '@angular/core/testing';

import { CedulaUsuarioService } from './cedula-usuario.service';

describe('CedulaUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CedulaUsuarioService = TestBed.get(CedulaUsuarioService);
    expect(service).toBeTruthy();
  });
});
