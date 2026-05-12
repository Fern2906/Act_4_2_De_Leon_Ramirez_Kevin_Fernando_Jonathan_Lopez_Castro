import { Routes } from '@angular/router';
import { ButtonView } from './views/button-view/button-view';
import { VerificacionView } from './views/verificacion-view/verificacion-view';

export const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonView },
  { path: 'verificacion', component: VerificacionView },
];
