import { Component, Input } from '@angular/core';
import { BarraBusqueda } from '../barra-busqueda/barra-busqueda';
import { Dropdown } from '../dropdown/dropdown';
import { Button } from '../button/button';
import { Etiqueta } from '../etiqueta/etiqueta';

export interface CardEtiqueta {
  estado: string;
  porcentaje: string;
}

export interface CardBoton {
  label: string;
  type?: 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
}

@Component({
  selector: 'app-card',
  imports: [BarraBusqueda, Dropdown, Button, Etiqueta],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  /** Texto destacado en la cabecera */
  @Input() titulo = '';
  /** Texto secundario en la cabecera */
  @Input() subtitulo = '';

  /** Etiqueta única a la derecha del header (shorcut para una sola) */
  @Input() etiqueta: CardEtiqueta | null = null;
  /** Lista de etiquetas bajo el header */
  @Input() etiquetas: CardEtiqueta[] = [];

  /** Muestra la barra de búsqueda */
  @Input() mostrarBusqueda = false;
  @Input() placeholderBusqueda = 'Buscar tema...';

  /** Muestra el dropdown */
  @Input() mostrarDropdown = false;
  @Input() dropdownLabel = 'Seleccionar';
  @Input() dropdownItems: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  /** Botones al pie */
  @Input() botones: CardBoton[] = [];
}
