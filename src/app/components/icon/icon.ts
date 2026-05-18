import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  @Input() name: string = '';
  @Input() size: number = 24;

  constructor(private sanitizer: DomSanitizer) {}

  get maskUrl(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(icons/${this.name}.svg)`);
  }
}
