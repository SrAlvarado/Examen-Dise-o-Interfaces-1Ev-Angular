import { Component, input, output } from '@angular/core';
import { CartItem, Pizza } from '../../models/pizza.model';
import { MoleculaItemPedido } from "../../molecules/molecula-item-pedido/molecula-item-pedido";
import { MoleculaCardPizza } from "../../molecules/molecula-card-pizza/molecula-card-pizza";

@Component({
  selector: 'app-organismo-listado-pizzas',
  imports: [MoleculaItemPedido, MoleculaCardPizza],
  templateUrl: './organismo-listado-pizzas.html',
  styleUrl: './organismo-listado-pizzas.scss',
})
export class OrganismoListadoPizzas {
  pizzas = input.required<Pizza[]>();
  resumenPedido = input.required<CartItem[]>();
  
  addToCart = output<CartItem>();

  onAddToCart(item: CartItem) {
    this.addToCart.emit(item);
  }
}
