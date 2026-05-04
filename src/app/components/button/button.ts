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
  @Input() showIcon: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = 'Botón';
  @Input() disabled: boolean = false;

  get iconSize(): number {
    return this.size === 'mobile' ? 16 : this.size === 'tablet' ? 18 : 20;
  }
}
