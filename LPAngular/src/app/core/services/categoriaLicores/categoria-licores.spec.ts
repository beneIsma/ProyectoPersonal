import { TestBed } from '@angular/core/testing';

import { CategoriaLicoresService } from './categoria-licores.service';

describe('CategoriaLicoresService', () => {
  let service: CategoriaLicoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaLicoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
