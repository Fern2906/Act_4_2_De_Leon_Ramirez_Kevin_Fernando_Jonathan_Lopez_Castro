import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';

export interface CeldaItem {
  texto1: string;
  texto2: string;
  mes: string;
  colorSeleccionado: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-celdas',
  imports: [Icon],
  templateUrl: './celdas.html',
  styleUrl: './celdas.css',
})
export class Celdas {
  @Input() items: CeldaItem[] = [
    { texto1: 'Texto', texto2: 'Texto', mes: 'Mes', colorSeleccionado: '', titulo: 'Titulo', descripcion: 'Descripción' },
    { texto1: 'Texto', texto2: 'Texto', mes: 'Mes', colorSeleccionado: '', titulo: 'Titulo', descripcion: 'Descripción' },
    { texto1: 'Texto', texto2: 'Texto', mes: 'Mes', colorSeleccionado: 'amarillo', titulo: 'Titulo', descripcion: 'Descripción' },
  ];

  colores = ['blanco', 'gris', 'verde', 'amarillo', 'rojo'];

  seleccionarColor(item: CeldaItem, color: string): void {
    item.colorSeleccionado = color;
  }
}
