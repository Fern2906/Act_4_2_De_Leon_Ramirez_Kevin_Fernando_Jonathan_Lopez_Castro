import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { Dropdown } from '../../components/dropdown/dropdown';

@Component({
  selector: 'app-button-view',
  imports: [Button, Etiqueta, Dropdown],
  templateUrl: './button-view.html',
  styleUrl: './button-view.css',
})
export class ButtonView {}
