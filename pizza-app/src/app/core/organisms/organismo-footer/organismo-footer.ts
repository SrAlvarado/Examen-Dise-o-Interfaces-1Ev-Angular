import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-organismo-footer',
  imports: [],
  templateUrl: './organismo-footer.html',
  styleUrl: './organismo-footer.scss',
})
export class OrganismoFooter {
  creador = input<string>('Markel Alvarado'); 
  anioActual = signal<number>(new Date().getFullYear()); 
}
