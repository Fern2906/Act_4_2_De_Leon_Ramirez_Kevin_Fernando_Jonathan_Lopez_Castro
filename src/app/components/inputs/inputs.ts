import { Component, Input } from '@angular/core';

/**
 * Campo de formulario genérico con soporte para texto, número y fecha.
 *
 * Traduce el tipo semántico (`tipo`) al atributo `type` nativo del
 * `<input>` HTML y genera un placeholder adecuado automáticamente.
 *
 * @example
 * <!-- Campo de texto grande -->
 * <app-inputs tipo="texto" tamano="grande" />
 *
 * @example
 * <!-- Campo de fecha -->
 * <app-inputs tipo="fecha" />
 */
@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {
  /**
   * Tipo semántico del campo.
   * - `'texto'`  → `<input type="text">`
   * - `'numero'` → `<input type="number">`
   * - `'fecha'`  → `<input type="date">`
   */
  @Input() tipo: string = 'texto';

  /** Tamaño visual del campo: `'grande'` o `'pequeño'`. */
  @Input() tamano: string = 'grande';

  /**
   * Devuelve el atributo `type` nativo del `<input>` según `tipo`.
   * Desconocidos caen en `'text'`.
   */
  get inputType(): string {
    switch (this.tipo) {
      case 'texto': return 'text';
      case 'numero': return 'number';
      case 'fecha': return 'date';
      default: return 'text';
    }
  }

  /**
   * Devuelve el placeholder adecuado según `tipo`.
   * Desconocidos devuelven cadena vacía.
   */
  get inputPlaceholder(): string {
    switch (this.tipo) {
      case 'texto': return 'Ingrese texto...';
      case 'numero': return 'Ingrese cantidad...';
      case 'fecha': return 'Fecha';
      default: return '';
    }
  }
}
