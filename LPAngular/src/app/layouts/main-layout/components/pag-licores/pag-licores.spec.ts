import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLicores } from './pag-licores';

describe('PagLicores', () => {
  let component: PagLicores;
  let fixture: ComponentFixture<PagLicores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagLicores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagLicores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
