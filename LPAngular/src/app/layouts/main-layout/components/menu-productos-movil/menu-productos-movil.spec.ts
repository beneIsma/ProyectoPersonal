import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductosMovil } from './menu-productos-movil';

describe('MenuProductosMovil', () => {
  let component: MenuProductosMovil;
  let fixture: ComponentFixture<MenuProductosMovil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuProductosMovil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuProductosMovil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
