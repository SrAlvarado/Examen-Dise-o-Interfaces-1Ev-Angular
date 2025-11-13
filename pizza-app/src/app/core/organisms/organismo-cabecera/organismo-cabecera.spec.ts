import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoCabecera } from './organismo-cabecera';

describe('OrganismoCabecera', () => {
  let component: OrganismoCabecera;
  let fixture: ComponentFixture<OrganismoCabecera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoCabecera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoCabecera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
