import { Component, Input } from '@angular/core';
import { Icon } from "../icon/icon";

export type ButtonSize = 'mobile' | 'tablet' | 'desktop';
export type ButtonType = 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
export type ButtonHover = 'predeterminado' | 'resaltado';

@Component({
  selector: 'app-button',
  imports: [Icon],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() size: ButtonSize = 'desktop';
  @Input() type: ButtonType = 'primario';
  @Input() hover: ButtonHover = 'predeterminado';
  @Input() showIcon: boolean = true;
  @Input() icon: string = 'Icono_agregar';
  @Input() label: string = '';

  get iconSize(): number {
    return this.size === 'mobile' ? 16 : this.size === 'tablet' ? 18 : 20;
  }
}
