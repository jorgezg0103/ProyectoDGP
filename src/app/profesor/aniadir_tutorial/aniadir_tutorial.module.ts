//Nombre de archivo: tutoriales.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jesús López Rodríguez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aniadir_tutorialPageRoutingModule } from './aniadir_tutorial-routing.module';

import { Aniadir_tutorialPage } from './aniadir_tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aniadir_tutorialPageRoutingModule
  ],
  declarations: [Aniadir_tutorialPage]
})
export class Aniadir_tutorialPageModule {}