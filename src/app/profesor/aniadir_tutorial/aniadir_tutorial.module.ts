//Nombre de archivo: tutoriales.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jesús López Rodríguez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aniadir_tutorialesPageRoutingModule } from './aniadir_tutoriales-routing.module';

import { Aniadir_tutorialesPage } from './aniadir_tutoriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aniadir_tutorialesPageRoutingModule
  ],
  declarations: [Aniadir_tutorialesPage]
})
export class Aniadir_tutorialesPageModule {}