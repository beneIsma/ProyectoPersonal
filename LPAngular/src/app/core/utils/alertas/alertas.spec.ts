import { TestBed } from '@angular/core/testing';

import { AlertasServices } from './alertas.services';

describe('AlertasServices', () => {
  let service: AlertasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertasServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
