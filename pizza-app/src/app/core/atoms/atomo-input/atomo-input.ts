import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-atomo-input',
  imports: [],
  templateUrl: './atomo-input.html',
  styleUrl: './atomo-input.scss',
})
export class AtomoInput {
  valor = input<any>('');
  valorChange = output<any>();
  label = input<string>('');
  placeholder = input<string>('');
  tipo = input<string>('text');
  errorMensaje = input<string>(''); 

  onValorChange(nuevoValor: any) {
    this.valorChange.emit(nuevoValor);
  }
}
