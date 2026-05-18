import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../button/button';

/** Definición de un botón del pie del modal. */
export interface ModalBoton {
  /** Texto visible del botón. */
  label: string;
  /** Variante visual del botón. Predeterminado: `'primario'`. */
  type?: 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
}

/**
 * Diálogo modal con overlay configurable.
 *
 * Cuando `visible` es `true`, el componente se muestra sobre el contenido
 * con un fondo semitransparente. Al pulsar el botón de cierre o cualquier
 * botón que llame a `onCerrar()`, emite el evento `cerrar` y oculta el panel.
 *
 * @example
 * <app-modal
 *   titulo="Confirmar acción"
 *   [visible]="mostrarModal"
 *   [botones]="[{ label: 'Cancelar', type: 'secundario' }, { label: 'Aceptar', type: 'primario' }]"
 *   (cerrar)="mostrarModal = false"
 * />
 */
@Component({
  selector: 'app-modal',
  imports: [Button],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  /** Título principal mostrado en la cabecera del modal. */
  @Input() titulo = 'Texto principal';

  /**
   * Controla la visibilidad del modal.
   * - `true`  → muestra el overlay.
   * - `false` → oculta el componente.
   */
  @Input() visible = false;

  /**
   * Variante visual del modal.
   * - `'estandar'` → comportamiento por defecto (pantalla completa en móvil).
   * - `'movil'`    → panel flotante compacto que no cubre toda la pantalla en móvil.
   */
  @Input() variante: 'estandar' | 'movil' = 'estandar';

  /** Lista de botones renderizados en el pie del modal. */
  @Input() botones: ModalBoton[] = [
    { label: 'Button', type: 'secundario' },
    { label: 'Button', type: 'primario' },
  ];

  /** Se emite cuando el usuario cierra el modal (botón \u2715 o acción programada). */
  @Output() cerrar = new EventEmitter<void>();

  /**
   * Oculta el modal y emite el evento `cerrar`.
   * Llamar desde el template o desde el componente padre para cerrar el diálogo.
   */
  onCerrar(): void {
    this.visible = false;
    this.cerrar.emit();
  }
}
