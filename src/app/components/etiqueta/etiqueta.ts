import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etiqueta',
  imports: [],
  templateUrl: './etiqueta.html',
  styleUrl: './etiqueta.css',
})
export class Etiqueta {
  @Input() porcentaje: string = 'value%';
  @Input() estados: string = 'clase';
}
