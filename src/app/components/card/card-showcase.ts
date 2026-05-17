import { Component } from '@angular/core';
import { Card, CardTamano, CardTipo } from './card';

interface CardVariante {
  tipo: CardTipo;
  titulo?: string;
  subtitulo?: string;
}

@Component({
  selector: 'app-card-showcase',
  imports: [Card],
  templateUrl: './card-showcase.html',
  styleUrl: './card-showcase.css',
})
export class CardShowcase {
  readonly tamanos: CardTamano[] = ['Desktop', 'Tablet', 'mobile'];

  readonly variantes: CardVariante[] = [
    { tipo: 'Principal', titulo: 'Texto principal', subtitulo: 'Texto subtitulo' },
    { tipo: 'backlog', titulo: 'Texto principal', subtitulo: 'Texto subtitulo' },
    { tipo: 'Leyenda', titulo: 'Texto principal' },
    { tipo: 'backlogCard', titulo: 'Texto principal', subtitulo: 'Texto subtitulo' },
    { tipo: 'TablaCard' },
    { tipo: 'texto', titulo: 'Texto principal', subtitulo: 'Texto subtitulo' },
  ];

  readonly botonesExportar = [
    { label: 'Button', type: 'secundario' as const, icon: 'Icono_excel' },
    { label: 'Button', type: 'primario' as const, icon: 'Icono_pdf' },
  ];

  readonly etiquetaBacklog = { estado: 'masDel25', porcentaje: 'value%' };
  readonly etiquetaBacklogCard = { estado: 'masDel25', porcentaje: 'value%' };

  lineasTexto(tamano: CardTamano): string[] {
    if (tamano === 'Desktop') return [];
    return ['Texto principal', 'Texto principal', 'Texto principal'];
  }
}
