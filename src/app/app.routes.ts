import { Routes } from '@angular/router';
import { VerificacionView } from './views/verificacion-view/verificacion-view';

export const routes: Routes = [
  { path: '', redirectTo: 'verificacion', pathMatch: 'full' },
  { path: 'verificacion', component: VerificacionView },
];
