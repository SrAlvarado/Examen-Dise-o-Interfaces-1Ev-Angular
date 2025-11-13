import { Component, input } from '@angular/core';
import { CartItem } from '../../models/pizza.model';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-molecula-item-pedido',
  imports: [DecimalPipe],
  templateUrl: './molecula-item-pedido.html',
  styleUrl: './molecula-item-pedido.scss',
})
export class MoleculaItemPedido {
  item = input.required<CartItem>();
}