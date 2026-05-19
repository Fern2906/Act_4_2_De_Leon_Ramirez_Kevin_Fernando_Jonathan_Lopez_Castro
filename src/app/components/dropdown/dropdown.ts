import { Component, Input } from '@angular/core';

/**
 * Lista desplegable (select) configurable con soporte de estados y tamaños.
 *
 * Renderiza un `<select>` nativo con las opciones recibidas por `items`.
 * El `estado` permite aplicar clases CSS de validación (p. ej. error/éxito).
 *
 * @example
 * <app-dropdown
 *   label="Mes"
 *   [items]="['Enero', 'Febrero', 'Marzo']"
 *   tamano="grande"
 * />
 */
@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  /** Estado visual del control: `'default'`, `'error'` o `'exito'`. */
  @Input() estado: string = 'default';

  /** Tamaño del control: `'grande'` o `'pequeño'`. */
  @Input() tamano: string = 'grande';

  /** Texto de la opción placeholder (primera opción no seleccionable). */
  @Input() label: string = 'Seleccionar';

  /** Lista de opciones que se muestran en el dropdown. */
  @Input() items: string[] = [];
}
