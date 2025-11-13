export interface PaymentForm {
  horaEntrega: string;
  direccion: string;
  metodoPago: 'Tarjeta' | 'Bizum';
  numeroTarjeta: string;
  numeroTelefono: string;
}