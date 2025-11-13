import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoIcono } from './atomo-icono';

describe('AtomoIcono', () => {
  let component: AtomoIcono;
  let fixture: ComponentFixture<AtomoIcono>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoIcono]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoIcono);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
