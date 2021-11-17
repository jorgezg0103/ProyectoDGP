//Nombre de archivo:home.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Alejandro Soriano Morante
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
