//Nombre de archivo: tutoriales.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jesús López Rodríguez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialesPageRoutingModule } from './tutoriales-routing.module';

import { TutorialesPage } from './tutoriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialesPageRoutingModule
  ],
  declarations: [TutorialesPage]
})
export class TutorialesPageModule {}
