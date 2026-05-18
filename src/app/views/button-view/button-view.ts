import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Inputs } from '../../components/inputs/inputs';
import { Celdas } from '../../components/celdas/celdas';
import { TablaMes } from '../../components/tabla-mes/tabla-mes';
import { BarraBusqueda } from '../../components/barra-busqueda/barra-busqueda';
import { Card } from '../../components/card/card';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-button-view',
  imports: [Button, Etiqueta, Dropdown, Inputs, Celdas, TablaMes, BarraBusqueda, Card, Modal],
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
   modalMovilAbierto = false;
   modalSesionMovilAbierto = false;

   abrirModal(tipo: 'simple' | 'amplio' | 'lateral' | 'mini' | 'compacto' | 'medio' | 'movil' | 'sesion-movil'): void {
     this.modalSimpleAbierto = tipo === 'simple';
     this.modalAmplioAbierto = tipo === 'amplio';
     this.modalLateralAbierto = tipo === 'lateral';
     this.modalMiniAbierto = tipo === 'mini';
     this.modalCompactoAbierto = tipo === 'compacto';
     this.modalMedioAbierto = tipo === 'medio';
     this.modalMovilAbierto = tipo === 'movil';
     this.modalSesionMovilAbierto = tipo === 'sesion-movil';
   }

   cerrarModal(tipo: 'simple' | 'amplio' | 'lateral' | 'mini' | 'compacto' | 'medio' | 'movil' | 'sesion-movil'): void {
     if (tipo === 'simple') this.modalSimpleAbierto = false;
     if (tipo === 'amplio') this.modalAmplioAbierto = false;
     if (tipo === 'lateral') this.modalLateralAbierto = false;
     if (tipo === 'mini') this.modalMiniAbierto = false;
     if (tipo === 'compacto') this.modalCompactoAbierto = false;
     if (tipo === 'medio') this.modalMedioAbierto = false;
     if (tipo === 'movil') this.modalMovilAbierto = false;
     if (tipo === 'sesion-movil') this.modalSesionMovilAbierto = false;
   }
 }
