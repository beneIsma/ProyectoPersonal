import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsSecondary } from './layouts-secondary';

describe('LayoutsSecondary', () => {
  let component: LayoutsSecondary;
  let fixture: ComponentFixture<LayoutsSecondary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsSecondary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsSecondary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
