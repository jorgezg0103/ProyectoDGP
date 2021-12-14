//Nombre de archivo:menu.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Laura Ortiz González, Jorge Zamudio Gutiérrez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { FooterAyudaHomeComponent } from '../../../components/footer-ayuda-home/footer-ayuda-home.component';
import { IteratePaginatedGridComponent } from '../../../components/iterate-paginated-grid/iterate-paginated-grid.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, FooterAyudaHomeComponent, IteratePaginatedGridComponent]
})
export class MenuPageModule {}
