import { Component, input, output, signal } from '@angular/core';
import { CartItem, Pizza } from '../../models/pizza.model';
import { AtomoBoton } from "../../atoms/atomo-boton/atomo-boton";
import { UpperCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-molecula-card-pizza',
  imports: [AtomoBoton, UpperCasePipe, DecimalPipe],
  templateUrl: './molecula-card-pizza.html',
  styleUrl: './molecula-card-pizza.scss',
})
export class MoleculaCardPizza {
  pizza = input.required<Pizza>();
  addToCart = output<CartItem>();
  
  cantidad = signal(1); 
  mostrarModalCantidad = signal(false); 
  // Signal temporal para el valor mientras el modal está abierto
  cantidadModal = signal(1); 

  // Abre el modal, inicializando el valor con la cantidad actual
  abrirModal() {
    this.cantidadModal.set(this.cantidad());
    this.mostrarModalCantidad.set(true);
  }

  // Cierra el modal
  cerrarModal() {
    this.mostrarModalCantidad.set(false);
  }
  
  onModalInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const num = Number(target.value);
    this.cantidadModal.set(num > 0 ? num : 1);
  }
  
  // Guarda la cantidad final al cerrar el modal
  guardarCantidad() {
    this.cantidad.set(this.cantidadModal());
    this.cerrarModal();
  }

  onAddToCart() {
    this.addToCart.emit({
      pizza: this.pizza(),
      cantidad: this.cantidad(), 
      subtotal: this.pizza().precio * this.cantidad(),
    });
    this.cantidad.set(1);
  }
}