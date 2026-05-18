import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon } from '../icon/icon';

export type CeldaTipo = 'Texto' | 'Vacía' | 'Tema' | 'Boton' | 'Mes';
export type CeldaColor =
  | 'Predeterminado'
  | 'Clase'
  | 'Atraso'
  | 'Examen'
  | 'Encabezado'
  | 'Administrativo';
export type CeldaTamano = 'Desktop' | 'Tablet' | 'Mobile';

@Component({
  selector: 'app-celdas',
  imports: [Icon],
  templateUrl: './celdas.html',
  styleUrl: './celdas.css',
})
export class Celdas {
  @Input() tipo: CeldaTipo = 'Texto';
  @Input() color: CeldaColor = 'Predeterminado';
  @Input() tamano: CeldaTamano = 'Desktop';
  @Input() texto = 'Texto';
  @Input() titulo = 'Titulo';
  @Input() descripcion = 'Descripción';

  @Output() mesAnterior = new EventEmitter<void>();
  @Output() mesSiguiente = new EventEmitter<void>();
  @Output() eliminar = new EventEmitter<void>();

  readonly flechaTamano: Record<CeldaTamano, number> = {
    Desktop: 15,
    Tablet: 15,
    Mobile: 15,
  };

  readonly iconoTrashTamano: Record<CeldaTamano, number> = {
    Desktop: 20,
    Tablet: 20,
    Mobile: 20,
  };

  claseHost(): string {
    return [
      'celda',
      `celda--tipo-${this.slug(this.tipo)}`,
      `celda--color-${this.slug(this.color)}`,
      `celda--tamano-${this.slug(this.tamano)}`,
    ].join(' ');
  }

  private slug(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
