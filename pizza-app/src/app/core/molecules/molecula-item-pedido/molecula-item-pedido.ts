import { Component, input } from '@angular/core';
import { CartItem } from '../../models/pizza.model';

@Component({
  selector: 'app-molecula-item-pedido',
  imports: [],
  templateUrl: './molecula-item-pedido.html',
  styleUrl: './molecula-item-pedido.scss',
})
export class MoleculaItemPedido {
  item = input.required<CartItem>();
}
