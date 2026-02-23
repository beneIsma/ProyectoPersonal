import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarelaDePago } from './pasarela-de-pago';

describe('PasarelaDePago', () => {
  let component: PasarelaDePago;
  let fixture: ComponentFixture<PasarelaDePago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasarelaDePago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasarelaDePago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
