import { Component, signal } from '@angular/core';
import { CartItem, Pizza } from './core/models/pizza.model';
import { PaymentForm } from './core/models/pago.form.model';
import { OrganismoFormularioPago } from "./core/organisms/organismo-formulario-pago/organismo-formulario-pago";
import { OrganismoFooter } from "./core/organisms/organismo-footer/organismo-footer";
import { OrganismoListadoPizzas } from "./core/organisms/organismo-listado-pizzas/organismo-listado-pizzas";
import { OrganismoCabecera } from "./core/organisms/organismo-cabecera/organismo-cabecera";

const PIZZAS_MOCK: Pizza[] = [

  // Iconos: fa-bowl-food (Salsa, no utilio fa-tomate por que es premium), fa-cheese (Queso), fa-bacon (Carne/Bacon), fa-onion (Cebolla), fa-fish-fins (Pescado), fa-pepper-hot (Pimiento/Verdura), fa-pineapple (Piña), fa-egg (Huevo), fa-mushroom (Champiñón)
  { id: 1, nombre: 'Margarita', precio: 15.50, imagenUrl: 'pizza-margarita.jpg'  , ingredientesIconos: ['fa-bowl-food', 'fa-cheese'] }, 
  { id: 2, nombre: 'BBQ', precio: 18.00, imagenUrl: 'pizza-bbq.jpg', ingredientesIconos: ['fa-bowl-food', 'fa-cheese', 'fa-bacon', 'fa-onion'] }, 
  { id: 3, nombre: 'Napolitana', precio: 16.00, imagenUrl: 'pizza-napolitana.jpg', ingredientesIconos: ['fa-bowl-food', 'fa-cheese', 'fa-fish-fins'] }, 
  { id: 4, nombre: 'Vegetariana', precio: 17.50, imagenUrl: 'pizza-vegetariana.jpg', ingredientesIconos: ['fa-bowl-food', 'fa-cheese', 'fa-pepper-hot', 'fa-mushroom'] }, 
  { id: 5, nombre: 'Hawaiana', precio: 20.50, imagenUrl: 'pizza-hawaiana.jpg', ingredientesIconos: ['fa-bowl-food', 'fa-cheese', 'fa-pineapple'] }, 
  { id: 6, nombre: 'Carbonara', precio: 18.00, imagenUrl: 'pizza-carbonara.jpg', ingredientesIconos: ['fa-bowl-food', 'fa-cheese', 'fa-egg', 'fa-mushroom'] }, 
];

@Component({
  selector: 'app-root',
  imports: [OrganismoFormularioPago, OrganismoFooter, OrganismoListadoPizzas, OrganismoCabecera],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  pizzasDisponibles(): Pizza[] {
      return PIZZAS_MOCK;
  }
  
  carrito = signal<CartItem[]>([]);

  // Lógica de añadir al carrito
  onAddToCart(item: CartItem) {
    let currentCart = this.carrito();
    const existingItem = currentCart.find(i => i.pizza.id === item.pizza.id);

    if (existingItem) {
      existingItem.cantidad += item.cantidad;
      existingItem.subtotal += item.subtotal;
      this.carrito.set([...currentCart]);
    } else {
      this.carrito.set([...currentCart, item]);
    }
  }

  // Lógica de Limpiar Carrito
  onClearCart() {
    this.carrito.set([]);
  }

  // Lógica de Pago
  onPay(formData: PaymentForm) {
    if (this.carrito().length === 0) {
      alert('¡Carrito vacío!');
      return;
    }
    
    alert(`¡Gracias por tu pedido! El pedido llegará a las ${formData.horaEntrega} a la dirección ${formData.direccion}.`);
    this.onClearCart();
  }

  // Cálculo del total
  getTotal(): number {
    return this.carrito().reduce((total, item) => total + item.subtotal, 0);
  }
}