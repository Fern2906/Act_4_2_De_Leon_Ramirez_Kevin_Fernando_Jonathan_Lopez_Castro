import { Component, Input, OnChanges, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon implements OnChanges {
  @Input() name: string = '';

  @Input() size: number = 24;

  svg: SafeHtml = '';

  private sanitizer = inject(DomSanitizer);

  ngOnChanges(): void {
    if (this.name) {
      this.loadIcon(this.name);
    }
  }

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
