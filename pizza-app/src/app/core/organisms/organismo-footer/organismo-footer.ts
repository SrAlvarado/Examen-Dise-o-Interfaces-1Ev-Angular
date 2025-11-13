import { Component, input } from '@angular/core';

@Component({
  selector: 'app-organismo-footer',
  imports: [],
  templateUrl: './organismo-footer.html',
  styleUrl: './organismo-footer.scss',
})
export class OrganismoFooter {
  creador = input<string>('Markel Alvarado'); 
  
  anioActual: number = new Date().getFullYear(); 
}