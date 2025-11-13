import { Component, input, output, signal } from '@angular/core';
import { MoleculaItemPedido } from "../../molecules/molecula-item-pedido/molecula-item-pedido";
import { MoleculaCardPizza } from "../../molecules/molecula-card-pizza/molecula-card-pizza";
import { PaymentForm } from '../../models/pago.form.model';
import { AtomoBoton } from "../../atoms/atomo-boton/atomo-boton";
import { AtomoInput } from "../../atoms/atomo-input/atomo-input";

const INITIAL_FORM: PaymentForm = {
  horaEntrega: '',
  direccion: '',
  metodoPago: 'Tarjeta',
  numeroTarjeta: '',
  numeroTelefono: ''
};
@Component({
  selector: 'app-organismo-formulario-pago',
  imports: [MoleculaItemPedido, MoleculaCardPizza, AtomoBoton, AtomoInput],
  templateUrl: './organismo-formulario-pago.html',
  styleUrl: './organismo-formulario-pago.scss',
})
export class OrganismoFormularioPago {
  totalPedido = input.required<number>();
  realizarPago = output<PaymentForm>();
  limpiarPedido = output<void>();

  form = signal<PaymentForm>(INITIAL_FORM);
  errors = signal<any>({});

  onInput(field: keyof PaymentForm, value: any) {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  onMetodoPagoChange(metodo: 'Tarjeta' | 'Bizum') {
    this.form.update(f => ({ 
      ...f, 
      metodoPago: metodo,
      numeroTarjeta: '',
      numeroTelefono: ''
    }));
  }

  validate(): boolean {
    const data = this.form();
    const newErrors: any = {};
    let isValid = true;

    if (!data.horaEntrega) { newErrors.horaEntrega = 'Obligatoria.'; isValid = false; }
    if (!data.direccion.trim()) { newErrors.direccion = 'Obligatoria.'; isValid = false; }

    // Validación de Tarjeta (16 dígitos)
    if (data.metodoPago === 'Tarjeta') {
      if (data.numeroTarjeta.length !== 16 || !/^\d{16}$/.test(data.numeroTarjeta)) {
        newErrors.numeroTarjeta = 'Debe tener 16 dígitos.';
        isValid = false;
      }
    }

    // Validación de Bizum (9 dígitos)
    if (data.metodoPago === 'Bizum') {
      if (data.numeroTelefono.length !== 9 || !/^\d{9}$/.test(data.numeroTelefono)) {
        newErrors.numeroTelefono = 'Debe tener 9 dígitos.';
        isValid = false;
      }
    }
    
    this.errors.set(newErrors);
    return isValid;
  }

  onSubmit() {
    if (this.validate()) {
      this.realizarPago.emit(this.form());
    }
  }

  onClear() {
    this.limpiarPedido.emit();
    this.form.set(INITIAL_FORM);
    this.errors.set({});
  }
}
