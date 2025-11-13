import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoBoton } from './atomo-boton';

describe('AtomoBoton', () => {
  let component: AtomoBoton;
  let fixture: ComponentFixture<AtomoBoton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoBoton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoBoton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
