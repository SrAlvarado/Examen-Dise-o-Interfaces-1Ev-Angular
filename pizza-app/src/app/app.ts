import { Component, signal } from '@angular/core';
import { CartItem, Pizza } from './core/models/pizza.model';
import { PaymentForm } from './core/models/pago.form.model';
import { OrganismoFormularioPago } from "./core/organisms/organismo-formulario-pago/organismo-formulario-pago";
import { OrganismoFooter } from "./core/organisms/organismo-footer/organismo-footer";
import { OrganismoListadoPizzas } from "./core/organisms/organismo-listado-pizzas/organismo-listado-pizzas";
import { OrganismoCabecera } from "./core/organisms/organismo-cabecera/organismo-cabecera";

// PIZZAS_MOCK actualizado con clases de Bootstrap Icons para la maqueta
const PIZZAS_MOCK: Pizza[] = [
  // Iconos: bi-cup-fill (Salsa), bi-cheese (Queso), bi-piggy-bank-fill (Carne/Bacon), bi-globe (Cebolla), bi-fish (Pescado), bi-heart-fill (Pimiento/Verdura), bi-pineapple-fill (Piña), bi-egg-fill (Huevo), bi-flower3 (Champiñón)
  { id: 1, nombre: 'Margarita', precio: 15.50, imagenUrl: './/public/pizza-margarita.jpg', ingredientesIconos: ['bi-cup-fill', 'bi-cheese'] }, 
  { id: 2, nombre: 'BBQ', precio: 18.00, imagenUrl: './/public/pizza-bbq.jpg', ingredientesIconos: ['bi-cup-fill', 'bi-cheese', 'bi-piggy-bank-fill', 'bi-globe'] }, 
  { id: 3, nombre: 'Napolitana', precio: 16.00, imagenUrl: './/public/pizza-napolitana.jpg', ingredientesIconos: ['bi-cup-fill', 'bi-cheese', 'bi-fish'] }, 
  { id: 4, nombre: 'Vegetariana', precio: 17.50, imagenUrl: './/public/pizza-vegetariana.jpg', ingredientesIconos: ['bi-cup-fill', 'bi-cheese', 'bi-heart-fill', 'bi-flower3'] }, 
  { id: 5, nombre: 'Hawaiana', precio: 20.50, imagenUrl: './/public/pizza-hawaiana.jpg', ingredientesIconos: ['bi-cup-fill', 'bi-cheese', 'bi-pineapple-fill'] }, 
  { id: 6, nombre: 'Carbonara', precio: 18.00, imagenUrl: './/public/pizza-carbonara.jpg', ingredientesIconos: ['bi-cup-fill', 'bi-cheese', 'bi-egg-fill', 'bi-flower3'] }, 
];

@Component({
  selector: 'app-root',
  imports: [ OrganismoFormularioPago, OrganismoFooter, OrganismoListadoPizzas, OrganismoCabecera],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pizza-app');
  
  // 👈 Implementación simple como método de clase
  pizzasDisponibles(): Pizza[] {
      return PIZZAS_MOCK;
  }
  
  carrito = signal<CartItem[]>([]);

  // Lógica de adición al carrito
  onAddToCart(item: CartItem) {
    this.carrito.update(currentCart => {
      const existingItem = currentCart.find(i => i.pizza.id === item.pizza.id);

      if (existingItem) {
        existingItem.cantidad += item.cantidad;
        existingItem.subtotal += item.subtotal;
        return [...currentCart];
      } else {
        return [...currentCart, item];
      }
    });
  }

  // Lógica de Limpiar Carrito (básica)
  onClearCart() {
    this.carrito.set([]);
    // La función de poner foco se omite para mantener la solución simple y básica.
  }

  // Lógica de Pago (Al limpiar el pedido y dar las gracias, usando alert como la forma más simple)
  onPay(formData: PaymentForm) {
    if (this.carrito().length === 0) {
      alert('¡El carrito está vacío! Añade pizzas para pagar.');
      return;
    }
    
    alert(`¡Gracias por tu pedido, ${formData.metodoPago}! Tu pizza llegará a la dirección ${formData.direccion} a las ${formData.horaEntrega}.`);
    this.onClearCart();
  }

  // Cálculo del total
  getTotal(): number {
    return this.carrito().reduce((total, item) => total + item.subtotal, 0);
  }
}