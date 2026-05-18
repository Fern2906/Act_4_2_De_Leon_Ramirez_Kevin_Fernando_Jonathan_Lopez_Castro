import { Component, Input, OnChanges, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Renderizador de iconos SVG inline cargados de forma diferida
 * desde `/public/icons/<name>.svg`.
 *
 * El SVG se inserta de forma segura usando `DomSanitizer` y se
 * recarga automáticamente cuando cambia el `@Input() name`.
 *
 * @example
 * <app-icon name="Icono_agregar" [size]="24" />
 */
@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon implements OnChanges {
  /** Nombre del archivo SVG a cargar (sin extensión ni ruta). */
  @Input() name: string = '';

  /** Dimensión (ancho y alto) en píxeles del contenedor del ícono. */
  @Input() size: number = 24;

  /** Contenido SVG saneado listo para renderizarse con `[innerHTML]`. */
  svg: SafeHtml = '';

  private sanitizer = inject(DomSanitizer);

  /** Recarga el SVG cuando cambia `name` o `size`. */
  ngOnChanges(): void {
    if (this.name) {
      this.loadIcon(this.name);
    }
  }

  /**
   * Descarga el SVG por nombre y lo almacena saneado en `svg`.
   * Emite un aviso en consola si el archivo no existe.
   * @param name Nombre del ícono a cargar.
   */
  private async loadIcon(name: string): Promise<void> {
    try {
      const base = typeof window !== 'undefined'
        ? window.location.origin
        : 'http://localhost:4200';

      const response = await fetch(`${base}/icons/${encodeURIComponent(name)}.svg`);
      if (!response.ok) throw new Error(`Icon "${name}" not found`);
      const svgText = await response.text();
      this.svg = this.sanitizer.bypassSecurityTrustHtml(svgText);
    } catch (e) {
      console.warn(e);
      this.svg = '';
    }
  }
}
