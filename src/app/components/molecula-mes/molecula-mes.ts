import { Component, Input } from '@angular/core';
import { Celdas } from '../celdas/celdas';

export const DIAS_MES = 15;

@Component({
  selector: 'app-molecula-mes',
  imports: [Celdas],
  templateUrl: './molecula-mes.html',
  styleUrl: './molecula-mes.css',
})
export class MoleculaMes {
  @Input() cantidadDias = DIAS_MES;

  get diasVisibles(): number[] {
    return Array.from({ length: this.cantidadDias }, (_, i) => i);
  }
}
