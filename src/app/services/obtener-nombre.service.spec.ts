import { TestBed } from '@angular/core/testing';

import { ObtenerNombreService } from './obtener-nombre.service';

describe('ObtenerNombreService', () => {
  let service: ObtenerNombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerNombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
