import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Celdas } from '../celdas/celdas';
import { MoleculaMes } from '../molecula-mes/molecula-mes';

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

@Component({
  selector: 'app-tabla-mes',
  imports: [Celdas, MoleculaMes],
  templateUrl: './tabla-mes.html',
  styleUrl: './tabla-mes.css',
})
export class TablaMes {
  @Input() filas: TablaFila[] = [
    {
      titulo: 'Tema 1',
      descripcion: 'Descripción 1',
      hp: null,
      hr: null,
      problemas: null,
      teoria: null,
      trabajos: null,
      tareas: null,
      examenes: null,
      porcentaje: null,
    },
    {
      titulo: 'Tema 2',
      descripcion: 'Descripción 2',
      hp: null,
      hr: null,
      problemas: null,
      teoria: null,
      trabajos: null,
      tareas: null,
      examenes: null,
      porcentaje: null,
    },
    {
      titulo: 'Tema 3',
      descripcion: 'Descripción 3',
      hp: null,
      hr: null,
      problemas: null,
      teoria: null,
      trabajos: null,
      tareas: null,
      examenes: null,
      porcentaje: null,
    },
    {
      titulo: 'Tema 4',
      descripcion: 'Descripción 4',
      hp: null,
      hr: null,
      problemas: null,
      teoria: null,
      trabajos: null,
      tareas: null,
      examenes: null,
      porcentaje: null,
    },
  ];

  @Input() mostrarMolecula = false;

  @Output() eliminarTema = new EventEmitter<number>();
  @Output() mesAnterior = new EventEmitter<void>();
  @Output() mesSiguiente = new EventEmitter<void>();

  textoNum(valor: number | null): string {
    return valor != null ? String(valor) : 'Num';
  }

  textoPorcentaje(valor: number | null): string {
    return valor != null ? `${valor}%` : 'Num%';
  }

  onMesAnterior(): void {
    this.mesAnterior.emit();
  }

  onMesSiguiente(): void {
    this.mesSiguiente.emit();
  }
}
