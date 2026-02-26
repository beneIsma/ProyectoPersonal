import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaNotis } from './caja-notis';

describe('CajaNotis', () => {
  let component: CajaNotis;
  let fixture: ComponentFixture<CajaNotis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaNotis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaNotis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
