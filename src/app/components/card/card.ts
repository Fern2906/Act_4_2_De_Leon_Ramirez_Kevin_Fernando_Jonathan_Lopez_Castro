import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarraBusqueda } from '../barra-busqueda/barra-busqueda';
import { Dropdown } from '../dropdown/dropdown';
import { Button } from '../button/button';
import { Etiqueta } from '../etiqueta/etiqueta';
import { TablaMes, TablaFila } from '../tabla-mes/tabla-mes';
import { NgTemplateOutlet } from '@angular/common';

export interface CardEtiqueta {
  estado: string;
  porcentaje: string;
}

export interface CardBoton {
  label: string;
  type?: 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
  icon?: string;
}

export type CardTipo =
  | 'Principal'
  | 'backlog'
  | 'Leyenda'
  | 'backlogCard'
  | 'TablaCard'
  | 'texto'
  | 'contenido';

export type CardTamano = 'Desktop' | 'Tablet' | 'mobile';

@Component({
  selector: 'app-card',
  imports: [BarraBusqueda, Dropdown, Button, Etiqueta, TablaMes, NgTemplateOutlet],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() tipo: CardTipo = 'contenido';
  @Input() tamano: CardTamano = 'Desktop';

  @Input() titulo = '';
  @Input() subtitulo = '';

  @Input() etiqueta: CardEtiqueta | null = null;
  @Input() etiquetas: CardEtiqueta[] = [];

  @Input() mostrarBusqueda = false;
  @Input() placeholderBusqueda = 'Buscar tema...';

  @Input() mostrarDropdown = false;
  @Input() dropdownLabel = 'Seleccionar 2';
  @Input() dropdownItems: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  @Input() dropdownHint = 'Seleccionar atributo';

  @Input() botones: CardBoton[] = [];
  @Input() lineasTexto: string[] = [];
  /** Datos de tabla embebida (evita proyección ng-content en SSR) */
  @Input() filasTabla: TablaFila[] | null = null;
  @Input() mostrarMoleculaTabla = false;

  @Output() busqueda = new EventEmitter<string>();

  readonly leyendaDefault: CardEtiqueta[] = [
    { estado: 'clase', porcentaje: 'value%' },
    { estado: 'examen', porcentaje: 'value%' },
    { estado: 'atraso', porcentaje: 'value%' },
    { estado: 'administrativa', porcentaje: 'value%' },
  ];

  claseHost(): string {
    return [
      'card',
      `card--tipo-${this.slug(this.tipo)}`,
      `card--tamano-${this.slug(this.tamano)}`,
    ].join(' ');
  }

  tamanoDropdown(): string {
    return this.tamano === 'mobile' ? 'pequeno' : 'mediano';
  }

  etiquetaBacklogDefault(): CardEtiqueta {
    return this.etiqueta ?? { estado: 'masDel25', porcentaje: 'value%' };
  }

  tamanoBoton(): 'desktop' | 'tablet' | 'mobile' {
    if (this.tamano === 'mobile') return 'mobile';
    if (this.tamano === 'Tablet') return 'tablet';
    return 'desktop';
  }

  private slug(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
