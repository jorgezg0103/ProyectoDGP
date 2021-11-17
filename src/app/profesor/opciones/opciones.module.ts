//Nombre de archivo:opciones.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Alejandro Soriano Morante
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesPageRoutingModule } from './opciones-routing.module';

import { OpcionesPage } from './opciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesPageRoutingModule
  ],
  declarations: [OpcionesPage]
})
export class OpcionesPageModule {}
