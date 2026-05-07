import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';

export interface TablaFila {
  titulo: string;
  descripcion: string;
  hp: number | null;
  hr: number | null;
  problemas: number | null;
  teoria: number | null;
  trabajos: number | null;
  tareas: number | null;
  examenes: number | null;
  porcentaje: number | null;
}

const DIAS = 14;

@Component({
  selector: 'app-tabla-mes',
  imports: [Icon],
  templateUrl: './tabla-mes.html',
  styleUrl: './tabla-mes.css',
})
export class TablaMes {
  @Input() filas: TablaFila[] = [
    { titulo: 'Tema 1', descripcion: 'Descripción 1', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 2', descripcion: 'Descripción 2', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 3', descripcion: 'Descripción 3', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 4', descripcion: 'Descripción 4', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
  ];

  readonly dias = Array.from({ length: DIAS });

  mesActual = 'MES';

  anteriorMes(): void { /* navegación de mes */ }
  siguienteMes(): void { /* navegación de mes */ }
}
