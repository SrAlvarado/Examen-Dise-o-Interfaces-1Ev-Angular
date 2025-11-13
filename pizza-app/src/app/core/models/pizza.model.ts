export interface Pizza {
  id: number;
  nombre: string;
  precio: number;
  imagenUrl: string;
  ingredientesIconos: string[];
}

export interface CartItem {
  pizza: Pizza;
  cantidad: number;
  subtotal: number;
}