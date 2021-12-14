//Nombre de archivo: asignar_tarea.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jose Melguizo Ruano
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignar_tareaPageRoutingModule } from './asignar_tarea-routing.module';

import { Asignar_tareaPage } from './asignar_tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignar_tareaPageRoutingModule
  ],
  declarations: [Asignar_tareaPage]
})
export class Asignar_tareaPageModule {}
