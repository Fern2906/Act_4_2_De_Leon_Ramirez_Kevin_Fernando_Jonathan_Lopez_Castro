import { Routes } from '@angular/router';
import { ButtonView } from './views/button-view/button-view';

export const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonView },
];
