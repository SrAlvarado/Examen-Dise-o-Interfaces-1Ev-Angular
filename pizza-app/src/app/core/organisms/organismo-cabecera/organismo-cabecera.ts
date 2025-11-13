import { Component, input } from '@angular/core';

@Component({
  selector: 'app-organismo-cabecera',
  imports: [],
  templateUrl: './organismo-cabecera.html',
  styleUrl: './organismo-cabecera.scss',
})
export class OrganismoCabecera {
  titulo = input<string>('4V PIZZA');
}
