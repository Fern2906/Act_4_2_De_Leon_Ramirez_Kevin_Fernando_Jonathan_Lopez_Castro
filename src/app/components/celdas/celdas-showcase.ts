import { Component } from '@angular/core';
import { Celdas, CeldaColor, CeldaTamano } from './celdas';

interface CeldaShowcaseItem {
  tipo: 'Texto' | 'Vacía' | 'Tema' | 'Boton' | 'Mes';
  color: CeldaColor;
}

@Component({
  selector: 'app-celdas-showcase',
  imports: [Celdas],
  templateUrl: './celdas-showcase.html',
  styleUrl: './celdas.css',
})
export class CeldasShowcase {
  readonly tamanos: CeldaTamano[] = ['Desktop', 'Tablet', 'Mobile'];

  readonly variantes: CeldaShowcaseItem[] = [
    { tipo: 'Texto', color: 'Predeterminado' },
    { tipo: 'Texto', color: 'Encabezado' },
    { tipo: 'Mes', color: 'Encabezado' },
    { tipo: 'Vacía', color: 'Predeterminado' },
    { tipo: 'Vacía', color: 'Administrativo' },
    { tipo: 'Vacía', color: 'Clase' },
    { tipo: 'Vacía', color: 'Atraso' },
    { tipo: 'Vacía', color: 'Examen' },
    { tipo: 'Boton', color: 'Predeterminado' },
    { tipo: 'Tema', color: 'Predeterminado' },
  ];
}
