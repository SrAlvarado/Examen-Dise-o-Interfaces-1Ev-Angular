import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartItem, Pizza } from './core/models/pizza.model';
import { PaymentForm } from './core/models/pago.form.model';
import { OrganismoFormularioPago } from "./core/organisms/organismo-formulario-pago/organismo-formulario-pago";
import { OrganismoFooter } from "./core/organisms/organismo-footer/organismo-footer";
import { OrganismoListadoPizzas } from "./core/organisms/organismo-listado-pizzas/organismo-listado-pizzas";
import { OrganismoCabecera } from "./core/organisms/organismo-cabecera/organismo-cabecera";
const PIZZAS_MOCK: Pizza[] = [
  { id: 1, nombre: 'Margarita', precio: 15.50, imagenUrl: '/receta1.jpg', ingredientesIconos: ['Tomate', 'Mozzarella'] },
  { id: 2, nombre: 'BBQ', precio: 18.00, imagenUrl: '/receta2.jpg', ingredientesIconos: ['Carne', 'Salsa BBQ'] },
  { id: 3, nombre: 'Napolitana', precio: 16.00, imagenUrl: '/receta3.jpg', ingredientesIconos: ['Anchoas', 'Alcaparras'] },
  { id: 4, nombre: 'Vegetariana', precio: 17.50, imagenUrl: '/receta4.jpg', ingredientesIconos: ['Calabacín', 'Pimiento'] },
  { id: 5, nombre: 'Hawaiana', precio: 20.50, imagenUrl: '/receta1.jpg', ingredientesIconos: ['Piña', 'Jamón'] },
  { id: 6, nombre: 'Carbonara', precio: 18.00, imagenUrl: '/receta2.jpg', ingredientesIconos: ['Huevo', 'Bacon'] },
];
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OrganismoFormularioPago, OrganismoFooter, OrganismoListadoPizzas, OrganismoCabecera],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pizza-app');
  pizzasDisponibles = signal<Pizza[]>(PIZZAS_MOCK);
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

  // Lógica de Limpiar Carrito (para el botón LIMPIAR del formulario de pago)
  onClearCart() {
    this.carrito.set([]);
    // La funcionalidad de poner el foco en la lista de pizzas requiere ViewChild y se deja como nota.
  }

  // Lógica de Pago (Al limpiar el pedido y dar las gracias)
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
