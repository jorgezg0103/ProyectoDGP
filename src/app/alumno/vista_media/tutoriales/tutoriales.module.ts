//Nombre de archivo:tutoriales.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Miguel Carracedo Rodríguez
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialesPageRoutingModule } from './tutoriales-routing.module';

import { TutorialesPage } from './tutoriales.page';

import { NgxPaginationModule } from 'ngx-pagination';
import { FooterAyudaHomeComponent } from '../../../components/footer-ayuda-home/footer-ayuda-home.component';
import { IteratePaginatedGridComponent } from '../../../components/iterate-paginated-grid/iterate-paginated-grid.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialesPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [TutorialesPage, FooterAyudaHomeComponent, IteratePaginatedGridComponent]
})
export class TutorialesPageModule {}
