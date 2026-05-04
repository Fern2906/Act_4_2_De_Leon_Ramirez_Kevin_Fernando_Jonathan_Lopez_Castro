import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Etiqueta } from '../../components/etiqueta/etiqueta';

@Component({
  selector: 'app-button-view',
  imports: [Button, Etiqueta],
  templateUrl: './button-view.html',
  styleUrl: './button-view.css',
})
export class ButtonView {}
