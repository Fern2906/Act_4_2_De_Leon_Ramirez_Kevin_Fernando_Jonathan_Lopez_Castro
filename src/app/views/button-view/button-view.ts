import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Inputs } from '../../components/inputs/inputs';
import { CeldasShowcase } from '../../components/celdas/celdas-showcase';
import { TablaMes } from '../../components/tabla-mes/tabla-mes';
import { MoleculaMes } from '../../components/molecula-mes/molecula-mes';
import { BarraBusqueda } from '../../components/barra-busqueda/barra-busqueda';
import { Card } from '../../components/card/card';
import { CardShowcase } from '../../components/card/card-showcase';
import { Modal } from '../../components/modal/modal';
import { ModalShowcase } from '../../components/modal/modal-showcase';

@Component({
  selector: 'app-button-view',
  imports: [Button, Etiqueta, Dropdown, Inputs, CeldasShowcase, TablaMes, MoleculaMes, BarraBusqueda, Card, CardShowcase, Modal, ModalShowcase],
  templateUrl: './button-view.html',
  styleUrl: './button-view.css',
})
 export class ButtonView {
   modalSimpleAbierto = false;
   modalAmplioAbierto = false;
   modalLateralAbierto = false;
   modalMiniAbierto = false;
   modalCompactoAbierto = false;
   modalMedioAbierto = false;

   abrirModal(tipo: 'simple' | 'amplio' | 'lateral' | 'mini' | 'compacto' | 'medio'): void {
     this.modalSimpleAbierto = tipo === 'simple';
     this.modalAmplioAbierto = tipo === 'amplio';
     this.modalLateralAbierto = tipo === 'lateral';
     this.modalMiniAbierto = tipo === 'mini';
     this.modalCompactoAbierto = tipo === 'compacto';
     this.modalMedioAbierto = tipo === 'medio';
   }

   cerrarModal(tipo: 'simple' | 'amplio' | 'lateral' | 'mini' | 'compacto' | 'medio'): void {
     if (tipo === 'simple') this.modalSimpleAbierto = false;
     if (tipo === 'amplio') this.modalAmplioAbierto = false;
     if (tipo === 'lateral') this.modalLateralAbierto = false;
     if (tipo === 'mini') this.modalMiniAbierto = false;
     if (tipo === 'compacto') this.modalCompactoAbierto = false;
     if (tipo === 'medio') this.modalMedioAbierto = false;
   }
 }
