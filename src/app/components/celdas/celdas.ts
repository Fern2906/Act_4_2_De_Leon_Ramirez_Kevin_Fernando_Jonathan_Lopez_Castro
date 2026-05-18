import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';

/** Datos de una fila dentro del componente `app-celdas`. */
export interface CeldaItem {
  /** Primera columna de texto. */
  texto1: string;
  /** Segunda columna de texto. */
  texto2: string;
  /** Etiqueta de mes asociada a la fila. */
  mes: string;
  /** Color actualmente seleccionado para la fila (p. ej. `'verde'`, `'rojo'`). */
  colorSeleccionado: string;
  /** Título descriptivo de la fila. */
  titulo: string;
  /** Descripción ampliada de la fila. */
  descripcion: string;
}

/**
 * Tabla de celdas interactivas con selector de color por fila.
 *
 * Cada fila puede recibir uno de los cinco colores disponibles
 * (`blanco`, `gris`, `verde`, `amarillo`, `rojo`) que se aplica
 * como clase CSS al elemento correspondiente.
 *
 * @example
 * <app-celdas [items]="miListaDeCeldas" />
 */
@Component({
  selector: 'app-celdas',
  imports: [Icon],
  templateUrl: './celdas.html',
  styleUrl: './celdas.css',
})
export class Celdas {
  /** Lista de filas que se renderizan en la tabla. */
  @Input() items: CeldaItem[] = [
    { texto1: 'Texto', texto2: 'Texto', mes: 'Mes', colorSeleccionado: '', titulo: 'Titulo', descripcion: 'Descripción' },
    { texto1: 'Texto', texto2: 'Texto', mes: 'Mes', colorSeleccionado: '', titulo: 'Titulo', descripcion: 'Descripción' },
    { texto1: 'Texto', texto2: 'Texto', mes: 'Mes', colorSeleccionado: 'amarillo', titulo: 'Titulo', descripcion: 'Descripción' },
  ];

  /** Colores disponibles para el selector de cada fila. */
  colores = ['blanco', 'gris', 'verde', 'amarillo', 'rojo'];

  /**
   * Asigna el color seleccionado a una fila específica.
   * @param item Fila cuyo color se va a actualizar.
   * @param color Nuevo color a aplicar (debe pertenecer a `colores`).
   */
  seleccionarColor(item: CeldaItem, color: string): void {
    item.colorSeleccionado = color;
  }
}
