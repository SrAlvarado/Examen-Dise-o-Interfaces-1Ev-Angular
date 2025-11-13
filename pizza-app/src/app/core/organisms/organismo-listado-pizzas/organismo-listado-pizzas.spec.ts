import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoListadoPizzas } from './organismo-listado-pizzas';

describe('OrganismoListadoPizzas', () => {
  let component: OrganismoListadoPizzas;
  let fixture: ComponentFixture<OrganismoListadoPizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoListadoPizzas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoListadoPizzas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
