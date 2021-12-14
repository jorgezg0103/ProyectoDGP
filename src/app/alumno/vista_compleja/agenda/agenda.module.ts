//Nombre de archivo:agenda.module.ts
//Fichero encargado de agrupar todos los modulos utilizados en la página
//Autor: Jorge Zamudio Gutiérrez, Laura Ortiz González
//Define una  agrupacion de todos los modulos a usar

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';

import { NgxPaginationModule } from 'ngx-pagination';

import { FooterAyudaHomeComponent } from '../../../components/footer-ayuda-home/footer-ayuda-home.component';

// Imports necesarios para el calendario
import { NgCalendarModule } from 'ionic2-calendar';
import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    NgxPaginationModule,
    NgCalendarModule,
  ],
  providers:[
    {provide: LOCALE_ID, useValue: 'es-ES'}   // Para establecer el idioma a español
  ],
  declarations: [AgendaPage, FooterAyudaHomeComponent]
})
export class AgendaPageModule {}
