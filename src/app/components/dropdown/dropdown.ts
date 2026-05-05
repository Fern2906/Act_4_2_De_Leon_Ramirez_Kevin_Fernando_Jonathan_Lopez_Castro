import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  @Input() estado: string = 'default';
  @Input() tamano: string = '';
  @Input() label: string = 'Seleccionar';
  @Input() items: string[] = [];
}
