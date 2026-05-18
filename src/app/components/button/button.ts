import { Component, Input } from '@angular/core';
import { Icon } from "../icon/icon";

/** Punto de quiebre responsivo del botón. */
export type ButtonSize = 'mobile' | 'tablet' | 'desktop';

/** Variante de color/propósito del botón. */
export type ButtonType = 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';

/** Estado de realce visual al pasar el cursor. */
export type ButtonHover = 'predeterminado' | 'resaltado';

/**
 * Botón multipropósito con variantes de color, tamaños responsivos
 * e ícono SVG opcional. Usa `app-icon` internamente.
 *
 * - El tipo `'icono'` muestra solo el ícono sin etiqueta.
 * - El tamaño controla la altura y el padding según el punto de quiebre.
 *
 * @example
 * <!-- Botón primario con ícono en escritorio -->
 * <app-button type="primario" size="desktop" label="Guardar" />
 *
 * @example
 * <!-- Botón solo ícono -->
 * <app-button type="icono" icon="Icono_eliminar" />
 */
@Component({
  selector: 'app-button',
  imports: [Icon],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  /** Punto de quiebre responsivo que determina altura y padding. */
  @Input() size: ButtonSize = 'desktop';

  /** Variante visual del botón (color y propósito). */
  @Input() type: ButtonType = 'primario';

  /** Aplica la clase `btn--resaltado` para un estado hover forzado. */
  @Input() hover: ButtonHover = 'predeterminado';

  /** Si es `true` (y el tipo no es `'icono'`), muestra el ícono junto a la etiqueta. */
  @Input() showIcon: boolean = true;

  /** Nombre del archivo SVG del ícono (sin extensión) en `/public/icons/`. */
  @Input() icon: string = 'Icono_agregar';

  /** Texto visible del botón. Ignorado cuando `type === 'icono'`. */
  @Input() label: string = '';

  /**
   * Tamaño en píxeles del ícono interno según el punto de quiebre:
   * `mobile` → 16 px, `tablet` → 18 px, `desktop` → 20 px.
   */
  get iconSize(): number {
    return this.size === 'mobile' ? 16 : this.size === 'tablet' ? 18 : 20;
  }
}
