import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';

/** Datos de una fila dentro de `app-tabla-mes`. */
export interface TablaFila {
  /** Título corto del tema. */
  titulo: string;
  /** Descripción ampliada del tema. */
  descripcion: string;
  /** Horas planeadas (`null` si aún no se ha definido). */
  hp: number | null;
  /** Horas reales (`null` si aún no se ha registrado). */
  hr: number | null;
  /** Número de problemas resueltos. */
  problemas: number | null;
  /** Horas de teoría. */
  teoria: number | null;
  /** Número de trabajos entregados. */
  trabajos: number | null;
  /** Número de tareas completadas. */
  tareas: number | null;
  /** Número de exámenes presentados. */
  examenes: number | null;
  /** Porcentaje de avance calculado (0-100). */
  porcentaje: number | null;
}

const DIAS = 14;

/**
 * Tabla mensual de planeación académica.
 *
 * Muestra una cuadrícula de 14 días (dos semanas) por tema, junto con
 * columnas de indicadores (HP, HR, problemas, teoría, etc.).
 * Incluye controles para navegar entre meses.
 *
 * @example
 * <app-tabla-mes [filas]="misPlanificaciones" />
 */
@Component({
  selector: 'app-tabla-mes',
  imports: [Icon],
  templateUrl: './tabla-mes.html',
  styleUrl: './tabla-mes.css',
})
export class TablaMes {
  /** Filas de datos que se renderizan en la tabla. */
  @Input() filas: TablaFila[] = [
    { titulo: 'Tema 1', descripcion: 'Descripción 1', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 2', descripcion: 'Descripción 2', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 3', descripcion: 'Descripción 3', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 4', descripcion: 'Descripción 4', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
  ];

  /** Arreglo de 14 elementos usado para generar las columnas de días con `@for`. */
  readonly dias = Array.from({ length: DIAS });

  /** Etiqueta del mes actualmente visible en la tabla. */
  mesActual = 'MES';

  /** Navega al mes anterior (pendiente de implementar lógica de fecha). */
  anteriorMes(): void { /* navegación de mes */ }

  /** Navega al mes siguiente (pendiente de implementar lógica de fecha). */
  siguienteMes(): void { /* navegación de mes */ }
}
