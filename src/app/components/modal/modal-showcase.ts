import { Component } from '@angular/core';
import { Modal, ModalTamano, ModalTipo } from './modal';
import { Inputs } from '../inputs/inputs';
import { Dropdown } from '../dropdown/dropdown';

interface ModalVariante {
  tipo: ModalTipo;
  tamano: ModalTamano;
}

@Component({
  selector: 'app-modal-showcase',
  imports: [Modal, Inputs, Dropdown],
  templateUrl: './modal-showcase.html',
  styleUrl: './modal-showcase.css',
})
export class ModalShowcase {
  readonly variantes: ModalVariante[] = [
    { tipo: 'Tema', tamano: 'Desktop' },
    { tipo: 'Sesion', tamano: 'Desktop' },
    { tipo: 'Tema', tamano: 'Tablet' },
    { tipo: 'Sesion', tamano: 'Tablet' },
    { tipo: 'Tema', tamano: 'Mobile' },
    { tipo: 'Sesion', tamano: 'Mobile' },
  ];

  tamanoInput(tamano: ModalTamano): string {
    if (tamano === 'Mobile' || tamano === 'Tablet') return 'pequeno';
    return 'grande';
  }

  tamanoInputSesion(tamano: ModalTamano): string {
    if (tamano === 'Desktop') return 'pequeno';
    return 'pequeno';
  }
}
