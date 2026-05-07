import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celdas } from './celdas';

describe('Celdas', () => {
  let component: Celdas;
  let fixture: ComponentFixture<Celdas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Celdas],
    }).compileComponents();

    fixture = TestBed.createComponent(Celdas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
