import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoFooter } from './organismo-footer';

describe('OrganismoFooter', () => {
  let component: OrganismoFooter;
  let fixture: ComponentFixture<OrganismoFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
