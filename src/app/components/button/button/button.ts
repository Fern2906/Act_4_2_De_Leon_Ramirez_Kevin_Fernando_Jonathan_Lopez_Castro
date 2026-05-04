import { Component, Input } from '@angular/core';

export type ButtonSize = 'mobile' | 'tablet' | 'desktop';
export type ButtonType = 'primario' | 'secundario' | 'exito' | 'alerta' | 'icono' | 'usuario';
export type ButtonHover = 'predeterminado' | 'resaltado';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() size: ButtonSize = 'desktop';
  @Input() type: ButtonType = 'primario';
  @Input() hover: ButtonHover = 'predeterminado';
  @Input() showIcon: boolean = false;
  @Input() icon: string = 'star';
  @Input() label: string = 'Botón';
  @Input() disabled: boolean = false;
}
