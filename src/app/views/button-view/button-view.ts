import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Inputs } from '../../inputs/inputs';

@Component({
  selector: 'app-button-view',
  imports: [Button, Etiqueta, Dropdown, Inputs],
  templateUrl: './button-view.html',
  styleUrl: './button-view.css',
})
export class ButtonView {}
