import { Component, input } from '@angular/core';

@Component({
  selector: 'app-atomo-icono',
  imports: [],
  templateUrl: './atomo-icono.html',
  styleUrl: './atomo-icono.scss',
})
export class AtomoIcono {
  iconoClase = input<string>('');
}
