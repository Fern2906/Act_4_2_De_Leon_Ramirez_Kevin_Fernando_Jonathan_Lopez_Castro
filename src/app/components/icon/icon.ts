import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  @Input() name: string = '';
  @Input() size: number = 24;
}
