import { ChangeDetectionStrategy, Component, computed, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Button } from '../../components/button/button';
import { TablaFila } from '../../components/tabla-mes/tabla-mes';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Card } from '../../components/card/card';
import { Modal } from '../../components/modal/modal';
import { Inputs } from '../../components/inputs/inputs';

interface BacklogTema {
  titulo: string;
  descripcion: string;
  progreso: string;
}

@Component({
  selector: 'app-verificacion-view',
  imports: [Button, Dropdown, Card, Modal, Inputs],
  templateUrl: './verificacion-view.html',
  styleUrl: './verificacion-view.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificacionView {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isMobile = signal(
    isPlatformBrowser(this.platformId) ? window.innerWidth <= 760 : false
  );

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile.set(window.innerWidth <= 760);
  }

  // Señales para los modales
  readonly mostrarModalSesion = signal(false);
  readonly mostrarModalTema = signal(false);

  readonly filasTabla = signal<TablaFila[]>([
    { titulo: 'Tema 1', descripcion: 'Descripción 1', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 2', descripcion: 'Descripción 2', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 3', descripcion: 'Descripción 3', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
    { titulo: 'Tema 4', descripcion: 'Descripción 4', hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null },
  ]);

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

  // Interacciones de modales
  abrirModalSesion(): void {
    this.mostrarModalSesion.set(true);
  }

  abrirModalTema(): void {
    this.mostrarModalTema.set(true);
  }

  handleAccionSesion(accion: string): void {
    if (accion === 'Guardar sesión') {
      // Lógica de negocio simulada
      console.log('Sesión guardada');
    }
    this.mostrarModalSesion.set(false);
  }

  handleAccionTema(accion: string): void {
    if (accion === 'Guardar tema') {
      const nuevoNumero = this.backlog().length + 1;
      const nuevoTema: BacklogTema = {
        titulo: `Tema ${nuevoNumero}`,
        descripcion: 'Nuevo tema registrado',
        progreso: '0%'
      };
      
      this.backlog.update(prev => [...prev, nuevoTema]);
      this.filasTabla.update(prev => [...prev, {
        titulo: nuevoTema.titulo,
        descripcion: nuevoTema.descripcion,
        hp: null, hr: null, problemas: null, teoria: null, trabajos: null, tareas: null, examenes: null, porcentaje: null
      }]);
    }
    this.mostrarModalTema.set(false);
  }
}
