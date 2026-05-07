import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})

export class Inputs {
  @Input() tipo: string = "texto"
  @Input() tamano: string = "grande "
  
  get inputType(): string {
    switch (this.tipo) {
      case 'texto': return 'text';
      case 'numero': return 'number';
      case 'fecha': return 'date';
      default: return 'text';
    }
  }

  get inputPlaceholder(): string {
    switch (this.tipo) {
      case 'texto': return 'Ingrese texto...';
      case 'numero': return 'Ingrese cantidad...';
      case 'fecha': return 'Fecha';
      default: return '';
    }
  }
}
