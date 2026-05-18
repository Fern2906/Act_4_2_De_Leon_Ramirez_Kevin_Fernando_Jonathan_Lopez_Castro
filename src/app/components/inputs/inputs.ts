import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {
  @Input() tipo = 'texto';
  @Input() tamano = 'grande';
  @Input() inputPlaceholder = '';
  /** Alias legacy: text | number | date */
  @Input() set inputType(value: string) {
    if (!value) return;
    if (value === 'number') this.tipo = 'numero';
    else if (value === 'date') this.tipo = 'fecha';
    else this.tipo = 'texto';
  }

  get htmlInputType(): string {
    switch (this.tipo) {
      case 'numero':
        return 'number';
      case 'fecha':
        return 'date';
      default:
        return 'text';
    }
  }

  get placeholder(): string {
    if (this.inputPlaceholder) {
      return this.inputPlaceholder;
    }
    switch (this.tipo) {
      case 'numero':
        return 'Inserte cantidad...';
      case 'fecha':
        return 'Fecha';
      default:
        return 'Inserte texto...';
    }
  }

  get tamanoClase(): string {
    return this.tamano.trim();
  }
}
