//Nombre de archivo:home.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jorge Zamudio Gutiérrez, Laura Ortiz González
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { FooterAyudaHomeComponent } from '../../../components/footer-ayuda-home/footer-ayuda-home.component';
import { IteratePaginatedGridComponent } from '../../../components/iterate-paginated-grid/iterate-paginated-grid.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FooterAyudaHomeComponent, IteratePaginatedGridComponent]
})
export class HomePageModule {}
