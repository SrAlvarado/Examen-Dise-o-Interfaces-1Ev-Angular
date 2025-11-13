import { Component, input, output } from '@angular/core';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-atomo-input',
  imports: [NgIf],
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

  onValorChange(event: Event) {
    // Usamos 'as any' para forzar la propiedad y evitar el error TS 
    const valorEmitir = (event.target as any).value; 
    this.valorChange.emit(valorEmitir);
  }
}