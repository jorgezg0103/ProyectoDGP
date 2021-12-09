//Nombre de archivo:inicio.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Alejandro Soriano Morante
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPageRoutingModule } from './select-routing.module';

import { SelectPage } from './select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPageRoutingModule
  ],
  declarations: [SelectPage]
})
export class SelectPageModule {}
