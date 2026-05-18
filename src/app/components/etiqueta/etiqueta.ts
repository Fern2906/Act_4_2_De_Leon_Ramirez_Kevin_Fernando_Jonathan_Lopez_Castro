import { Component, Input } from '@angular/core';

/**
 * Pastilla de estado que muestra un porcentaje acompañado de un color
 * semántico (clase CSS de estado).
 *
 * Se usa habitualmente dentro de `app-card` para indicar el avance
 * o el estado de un recurso.
 *
 * @example
 * <app-etiqueta porcentaje="75%" estados="verde" />
 */
@Component({
  selector: 'app-etiqueta',
  imports: [],
  templateUrl: './etiqueta.html',
  styleUrl: './etiqueta.css',
})
export class Etiqueta {
  /** Texto de porcentaje mostrado dentro de la pastilla (p. ej. `'80%'`). */
  @Input() porcentaje: string = 'value%';

  /**
   * Clase CSS de estado que determina el color de la pastilla.
   * Valores habituales: `'verde'`, `'rojo'`, `'amarillo'`, `'gris'`.
   */
  @Input() estados: string = 'clase';
}
