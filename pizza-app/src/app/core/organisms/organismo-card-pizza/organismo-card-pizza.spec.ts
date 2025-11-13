import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoCardPizza } from './organismo-card-pizza';

describe('OrganismoCardPizza', () => {
  let component: OrganismoCardPizza;
  let fixture: ComponentFixture<OrganismoCardPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoCardPizza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoCardPizza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
