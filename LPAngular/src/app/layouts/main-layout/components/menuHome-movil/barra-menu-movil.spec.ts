import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraMenuMovil } from './barra-menu-movil';

describe('BarraMenuMovil', () => {
  let component: BarraMenuMovil;
  let fixture: ComponentFixture<BarraMenuMovil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraMenuMovil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraMenuMovil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
