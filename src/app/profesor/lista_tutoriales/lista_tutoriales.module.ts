//Nombre de archivo: tutoriales.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jesús López Rodríguez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lista_tutorialesPageRoutingModule } from './lista_tutoriales-routing.module';

import { Lista_tutorialesPage } from './lista_tutoriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lista_tutorialesPageRoutingModule
  ],
  declarations: [Lista_tutorialesPage]
})
export class Lista_tutorialesPageModule {}