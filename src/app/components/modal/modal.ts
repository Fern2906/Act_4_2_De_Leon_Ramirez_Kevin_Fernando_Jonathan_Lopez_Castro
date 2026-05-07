import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../button/button';
import { Inputs } from '../../inputs/inputs';
import { Dropdown } from '../dropdown/dropdown';

export interface ModalBoton {
  label: string;
  type?: 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
}

@Component({
  selector: 'app-modal',
  imports: [Button, Inputs, Dropdown],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  /** Título del modal */
  @Input() titulo = 'Texto principal';
  /** Muestra el modal como overlay (true) o como panel inline (false) */
  @Input() visible = false;
  /** Botones del pie */
  @Input() botones: ModalBoton[] = [
    { label: 'Button', type: 'secundario' },
    { label: 'Button', type: 'primario' },
  ];
  @Output() cerrar = new EventEmitter<void>();

  onCerrar(): void {
    this.visible = false;
    this.cerrar.emit();
  }
}
