import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';

import { NgxPaginationModule } from 'ngx-pagination';

<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';

=======
>>>>>>> master
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
<<<<<<< HEAD
    NgxPaginationModule,
    RouterTestingModule
=======
    NgxPaginationModule
>>>>>>> master
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
