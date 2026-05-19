import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

export interface ModalBoton {
  label: string;
  type?: 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
  icon?: string;
}

export type ModalTipo = 'Tema' | 'Sesion';
export type ModalTamano = 'Desktop' | 'Tablet' | 'Mobile';

@Component({
  selector: 'app-modal',
  imports: [Button, Icon],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() tipo: ModalTipo = 'Tema';
  @Input() tamano: ModalTamano = 'Desktop';
  @Input() titulo = 'Texto principal';
  @Input() visible = false;
  /** Muestra el panel sin overlay (showcase / documentación) */
  @Input() inline = false;
  /** Si es false, el overlay no cierra el modal (comportamiento Figma AAAE01) */
  @Input() cerrarConBackdrop = false;

  @Input() botones: ModalBoton[] = [
    { label: 'Button', type: 'secundario', icon: 'Icono_add' },
    { label: 'Button', type: 'primario', icon: 'Icono_agregar' },
  ];

  @Output() cerrar = new EventEmitter<void>();
  @Output() accion = new EventEmitter<string>();

  get iconoHeader(): string {
    return this.tipo === 'Tema' ? 'Icono_notebook' : 'Icono_add';
  }

  clasePanel(): string {
    return [
      'modal__panel',
      `modal__panel--tipo-${this.slug(this.tipo)}`,
      `modal__panel--tamano-${this.slug(this.tamano)}`,
    ].join(' ');
  }

  tamanoBoton(): 'desktop' | 'tablet' | 'mobile' {
    if (this.tamano === 'Mobile') return 'mobile';
    if (this.tamano === 'Tablet') return 'tablet';
    return 'desktop';
  }

  onCerrar(): void {
    if (!this.inline) {
      this.visible = false;
    }
    this.cerrar.emit();
  }

  onBackdropClick(): void {
    if (this.cerrarConBackdrop && !this.inline) {
      this.onCerrar();
    }
  }

  private slug(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
