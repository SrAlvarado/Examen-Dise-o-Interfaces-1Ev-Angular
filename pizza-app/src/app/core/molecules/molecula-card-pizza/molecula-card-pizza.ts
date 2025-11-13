import { Component, input, output, signal } from '@angular/core';
import { CartItem, Pizza } from '../../models/pizza.model';
import { AtomoBoton } from "../../atoms/atomo-boton/atomo-boton";
import { UpperCasePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-molecula-card-pizza',
  imports: [AtomoBoton, UpperCasePipe, DecimalPipe, FormsModule],
  templateUrl: './molecula-card-pizza.html',
  styleUrl: './molecula-card-pizza.scss',
})
export class MoleculaCardPizza {
  pizza = input.required<Pizza>();
  addToCart = output<CartItem>();
  
  cantidad = signal(1);

// Código corregido en molecula-card-pizza.ts:
  onCantidadChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const num = Number(target.value);
    this.cantidad.set(num > 0 ? num : 1); 
  }

  onAddToCart() {
    this.addToCart.emit({
      pizza: this.pizza(),
      cantidad: this.cantidad(),
      subtotal: this.pizza().precio * this.cantidad(),
    });
    this.cantidad.set(1); // Reiniciar la cantidad después de la compra
  }
}