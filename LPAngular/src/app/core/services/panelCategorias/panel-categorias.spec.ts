import { TestBed } from '@angular/core/testing';

import { PanelCategoriasService } from './panel-categorias.service';

describe('PanelCategoriasService', () => {
  let service: PanelCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
