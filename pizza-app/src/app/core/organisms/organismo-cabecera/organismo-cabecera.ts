import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-organismo-cabecera',
  imports: [],
  templateUrl: './organismo-cabecera.html',
  styleUrl: './organismo-cabecera.scss',
})
export class OrganismoCabecera {
  titulo = input<string>('4V PIZZA');
  buscar = output<string>(); 

  // Método que recibe el término de búsqueda de la molécula (enlace en HTML)
  onBuscar(termino: string) {
    // Propaga el evento hacia la página principal
    this.buscar.emit(termino);
  }
}
