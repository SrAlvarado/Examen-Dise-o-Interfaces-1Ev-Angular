import { Component, input, output, signal } from '@angular/core';
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
  imports: [AtomoBoton, AtomoInput],
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

    // Validación de Tarjeta (16 dígitos) - Lógica simple
    if (data.metodoPago === 'Tarjeta') {
      if (data.numeroTarjeta.length !== 16 || !/^\d{16}$/.test(data.numeroTarjeta)) {
        newErrors.numeroTarjeta = 'Debe tener 16 dígitos.';
        isValid = false;
      }
    }

    // Validación de Bizum (9 dígitos) - Lógica simple
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
    // La plantilla ya tiene (ngSubmit), pero el botón tiene (clickBoton) con onSubmit() también por seguridad.
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