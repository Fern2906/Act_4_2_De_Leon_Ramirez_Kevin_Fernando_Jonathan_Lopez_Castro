import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Button } from '../../components/button/button';
import { BarraBusqueda } from '../../components/barra-busqueda/barra-busqueda';
import { TablaMes, TablaFila } from '../../components/tabla-mes/tabla-mes';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { Dropdown } from '../../components/dropdown/dropdown';

interface BacklogTema {
  titulo: string;
  descripcion: string;
  progreso: string;
}

@Component({
  selector: 'app-verificacion-view',
  imports: [Button, BarraBusqueda, TablaMes, Etiqueta, Dropdown],
  templateUrl: './verificacion-view.html',
  styleUrl: './verificacion-view.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificacionView {
  readonly filasTabla: TablaFila[] = [
    { titulo: 'Tema 1', descripcion: 'Descripción 1', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 2', descripcion: 'Descripción 2', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 3', descripcion: 'Descripción 3', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 4', descripcion: 'Descripción 4', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
  ];

  private readonly backlog = signal<BacklogTema[]>([
    { titulo: 'Tema 1', descripcion: 'Descripción 1', progreso: 'value%' },
    { titulo: 'Tema 2', descripcion: 'Descripción 2', progreso: 'value%' },
    { titulo: 'Tema 3', descripcion: 'Descripción 3', progreso: 'value%' },
    { titulo: 'Tema 4', descripcion: 'Descripción 4', progreso: 'value%' },
  ]);

  readonly filtro = signal('');

  readonly backlogFiltrado = computed(() => {
    const texto = this.filtro().trim().toLowerCase();
    if (!texto) {
      return this.backlog();
    }

    return this.backlog().filter((tema) => {
      return tema.titulo.toLowerCase().includes(texto) || tema.descripcion.toLowerCase().includes(texto);
    });
  });

  onBuscar(valor: string): void {
    this.filtro.set(valor);
  }
}
