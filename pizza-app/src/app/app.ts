import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { CartItem, Pizza } from './core/models/pizza.model';
import { PaymentForm } from './core/models/pago.form.model';
import { OrganismoFormularioPago } from "./core/organisms/organismo-formulario-pago/organismo-formulario-pago";
import { OrganismoFooter } from "./core/organisms/organismo-footer/organismo-footer";
import { OrganismoListadoPizzas } from "./core/organisms/organismo-listado-pizzas/organismo-listado-pizzas";
import { OrganismoCabecera } from "./core/organisms/organismo-cabecera/organismo-cabecera";

const PIZZAS_MOCK: Pizza[] = [
  // Iconos: flaticon-sauce (Salsa), flaticon-cheese (Queso), flaticon-bacon (Carne/Bacon), flaticon-onion (Cebolla), flaticon-fish (Pescado), flaticon-pepper (Pimiento/Verdura), flaticon-pineapple (Piña), flaticon-egg (Huevo), flaticon-mushroom (Champiñón)
  { id: 1, nombre: 'Margarita', precio: 15.50, imagenUrl: './/public/pizza-margarita.jpg', ingredientesIconos: ['flaticon-sauce', 'flaticon-cheese'] }, 
  { id: 2, nombre: 'BBQ', precio: 18.00, imagenUrl: './/public/pizza-bbq.jpg', ingredientesIconos: ['flaticon-sauce', 'flaticon-cheese', 'flaticon-bacon', 'flaticon-onion'] }, 
  { id: 3, nombre: 'Napolitana', precio: 16.00, imagenUrl: './/public/pizza-napolitana.jpg', ingredientesIconos: ['flaticon-sauce', 'flaticon-cheese', 'flaticon-fish'] }, 
  { id: 4, nombre: 'Vegetariana', precio: 17.50, imagenUrl: './/public/pizza-vegetariana.jpg', ingredientesIconos: ['flaticon-sauce', 'flaticon-cheese', 'flaticon-pepper', 'flaticon-mushroom'] }, 
  { id: 5, nombre: 'Hawaiana', precio: 20.50, imagenUrl: './/public/pizza-hawaiana.jpg', ingredientesIconos: ['flaticon-sauce', 'flaticon-cheese', 'flaticon-pineapple'] }, 
  { id: 6, nombre: 'Carbonara', precio: 18.00, imagenUrl: './/public/pizza-carbonara.jpg', ingredientesIconos: ['flaticon-sauce', 'flaticon-cheese', 'flaticon-egg', 'flaticon-mushroom'] }, 
];

@Component({
  selector: 'app-root',
  imports: [ OrganismoFormularioPago, OrganismoFooter, OrganismoListadoPizzas, OrganismoCabecera],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pizza-app');
  private document = inject(DOCUMENT);

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
    
    // CORRECCIÓN: Implementar la lógica de poner foco
    const pizzaListAnchor = this.document.getElementById('pizza-list-anchor');
    if (pizzaListAnchor) {
      // Necesita tabIndex = -1 para ser enfocable
      pizzaListAnchor.setAttribute('tabIndex', '-1'); 
      pizzaListAnchor.scrollIntoView({ behavior: 'smooth' }); // Opcional, pero mejora UX
      pizzaListAnchor.focus(); // Establece el foco
    }
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