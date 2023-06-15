import { TestBed } from '@angular/core/testing';

import { ServicioMirifaService } from './servicio-mirifa.service';

describe('ServicioMirifaService', () => {
  let service: ServicioMirifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMirifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
