import { Component, Input } from '@angular/core';
import { BarraBusqueda } from '../barra-busqueda/barra-busqueda';
import { Dropdown } from '../dropdown/dropdown';
import { Button } from '../button/button';
import { Etiqueta } from '../etiqueta/etiqueta';

/** Par de datos que describe el estado y el porcentaje de una etiqueta. */
export interface CardEtiqueta {
  /** Clase CSS de estado aplicada a `app-etiqueta` (p. ej. `'verde'`, `'rojo'`). */
  estado: string;
  /** Texto de porcentaje mostrado dentro de la etiqueta (p. ej. `'80%'`). */
  porcentaje: string;
}

/** Definición de un botón que se renderiza en el pie de la card. */
export interface CardBoton {
  /** Texto visible del botón. */
  label: string;
  /** Variante visual del botón. Predeterminado: `'primario'`. */
  type?: 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
}

/**
 * Contenedor de tarjeta (card) composable que puede incluir:
 * encabezado con título/subtítulo, etiquetas de estado, barra de búsqueda,
 * dropdown y botones de acción en el pie.
 *
 * Cada sección opcional se habilita con un `@Input` booleano o con datos.
 *
 * @example
 * <app-card
 *   titulo="Planeación"
 *   subtitulo="Enero 2026"
 *   [etiqueta]="{ estado: 'verde', porcentaje: '75%' }"
 *   [mostrarBusqueda]="true"
 *   [botones]="[{ label: 'Guardar', type: 'primario' }]"
 * />
 */
@Component({
  selector: 'app-card',
  imports: [BarraBusqueda, Dropdown, Button, Etiqueta],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  /** Texto destacado en la cabecera de la card. */
  @Input() titulo = '';

  /** Texto secundario debajo del título. */
  @Input() subtitulo = '';

  /** Etiqueta única mostrada a la derecha del encabezado. */
  @Input() etiqueta: CardEtiqueta | null = null;

  /** Lista de etiquetas adicionales debajo del encabezado. */
  @Input() etiquetas: CardEtiqueta[] = [];

  /** Si `true`, muestra la barra de búsqueda interna. */
  @Input() mostrarBusqueda = false;

  /** Placeholder del campo de búsqueda interno. */
  @Input() placeholderBusqueda = 'Buscar tema...';

  /** Si `true`, muestra el dropdown interno. */
  @Input() mostrarDropdown = false;

  /** Etiqueta visible del dropdown interno. */
  @Input() dropdownLabel = 'Seleccionar';

  /** Opciones del dropdown interno. */
  @Input() dropdownItems: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  /** Lista de botones renderizados en el pie de la card. */
  @Input() botones: CardBoton[] = [];
}
