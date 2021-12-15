//Nombre de archivo: tutoriales.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jesús López Rodríguez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eliminar_tutorialPageRoutingModule } from './eliminar_tutorial-routing.module';

import { Eliminar_tutorialPage } from './eliminar_tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eliminar_tutorialPageRoutingModule
  ],
  declarations: [Eliminar_tutorialPage]
})
export class Eliminar_tutorialPageModule {}