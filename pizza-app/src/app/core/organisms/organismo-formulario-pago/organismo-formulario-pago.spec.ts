import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoFormularioPago } from './organismo-formulario-pago';

describe('OrganismoFormularioPago', () => {
  let component: OrganismoFormularioPago;
  let fixture: ComponentFixture<OrganismoFormularioPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoFormularioPago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoFormularioPago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
