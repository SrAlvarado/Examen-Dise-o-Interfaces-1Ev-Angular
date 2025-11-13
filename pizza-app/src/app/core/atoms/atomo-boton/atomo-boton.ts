import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-atomo-boton',
  imports: [],
  templateUrl: './atomo-boton.html',
  styleUrl: './atomo-boton.scss',
})
export class AtomoBoton {
  texto = input<string>('');
  claseBootstrap = input<string>('btn-primary');
  clickBoton = output<void>();
  tipo = input<string>('button');

  manejarClick() {
    this.clickBoton.emit();
  }
}
