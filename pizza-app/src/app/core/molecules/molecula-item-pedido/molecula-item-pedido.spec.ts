import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculaItemPedido } from './molecula-item-pedido';

describe('MoleculaItemPedido', () => {
  let component: MoleculaItemPedido;
  let fixture: ComponentFixture<MoleculaItemPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculaItemPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculaItemPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
