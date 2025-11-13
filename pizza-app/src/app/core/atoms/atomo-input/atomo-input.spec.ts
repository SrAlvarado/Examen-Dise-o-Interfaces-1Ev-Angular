import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoInput } from './atomo-input';

describe('AtomoInput', () => {
  let component: AtomoInput;
  let fixture: ComponentFixture<AtomoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
