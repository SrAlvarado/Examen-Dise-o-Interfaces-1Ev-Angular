import { Component, input, output } from '@angular/core';
import { CartItem, Pizza } from '../../models/pizza.model';
import { MoleculaItemPedido } from "../../molecules/molecula-item-pedido/molecula-item-pedido";
import { MoleculaCardPizza } from "../../molecules/molecula-card-pizza/molecula-card-pizza";
import { DecimalPipe, NgIf } from '@angular/common'; // 👈 Añadir DecimalPipe y NgIf
@Component({
  selector: 'app-organismo-listado-pizzas',
  imports: [MoleculaItemPedido, MoleculaCardPizza, DecimalPipe, NgIf],
  templateUrl: './organismo-listado-pizzas.html',
  styleUrl: './organismo-listado-pizzas.scss',
  standalone: true,
})
export class OrganismoListadoPizzas {
  pizzas = input.required<Pizza[]>();
  resumenPedido = input.required<CartItem[]>();
  totalPedido = input<number>(0);
  addToCart = output<CartItem>();

  onAddToCart(item: CartItem) {
    this.addToCart.emit(item);
  }
}
