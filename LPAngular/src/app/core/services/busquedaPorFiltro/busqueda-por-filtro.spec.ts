import { TestBed } from '@angular/core/testing';

import { BusquedaPorFiltroService } from './busqueda-por-filtro.service';

describe('BusquedaPorFiltroService', () => {
  let service: BusquedaPorFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaPorFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
