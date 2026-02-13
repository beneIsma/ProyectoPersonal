import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControlAdmin } from './panel-control-admin';

describe('PanelControlAdmin', () => {
  let component: PanelControlAdmin;
  let fixture: ComponentFixture<PanelControlAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelControlAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelControlAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
