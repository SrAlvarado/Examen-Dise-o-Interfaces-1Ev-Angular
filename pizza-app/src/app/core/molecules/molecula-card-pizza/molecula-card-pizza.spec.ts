import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculaCardPizza } from './molecula-card-pizza';

describe('MoleculaCardPizza', () => {
  let component: MoleculaCardPizza;
  let fixture: ComponentFixture<MoleculaCardPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculaCardPizza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculaCardPizza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
