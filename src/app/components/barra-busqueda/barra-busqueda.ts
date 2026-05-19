import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Campo de búsqueda en tiempo real.
 *
 * Emite el texto escrito por el usuario con cada pulsación de tecla
 * a través del evento `busqueda`. Ideal para filtrar listas o tablas.
 *
 * @example
 * <app-barra-busqueda
 *   placeholder="Buscar tema..."
 *   (busqueda)="onBusqueda($event)"
 * />
 */
@Component({
  selector: 'app-barra-busqueda',
  imports: [FormsModule],
  templateUrl: './barra-busqueda.html',
  styleUrl: './barra-busqueda.css',
})
export class BarraBusqueda {
  /** Texto guía que aparece dentro del campo cuando está vacío. */
  @Input() placeholder = 'Buscar tema...';

  /** Emite el texto actual del campo cada vez que el usuario escribe. */
  @Output() busqueda = new EventEmitter<string>();

  /** Valor enlazado bidireccionalemnte con el `<input>` interno. */
  valor = '';

  /** Manejador interno del evento `input`; emite el valor actualizado. */
  onInput(): void {
    this.busqueda.emit(this.valor);
  }
}
