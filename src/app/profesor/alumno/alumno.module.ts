//Nombre de archivo:alumno.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jose Melguizo Ruano
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AlumnoPage } from './alumno.page';

import { AlumnoPageRoutingModule } from './alumno-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
