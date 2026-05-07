import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busqueda',
  imports: [FormsModule],
  templateUrl: './barra-busqueda.html',
  styleUrl: './barra-busqueda.css',
})
export class BarraBusqueda {
  @Input() placeholder = 'Buscar tema...';
  @Output() busqueda = new EventEmitter<string>();

  valor = '';

  onInput(): void {
    this.busqueda.emit(this.valor);
  }
}
