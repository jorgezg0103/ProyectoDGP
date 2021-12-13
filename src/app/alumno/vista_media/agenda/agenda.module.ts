import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';

import { NgxPaginationModule } from 'ngx-pagination';

import { FooterAyudaHomeComponent } from '../../../components/footer-ayuda-home/footer-ayuda-home.component';
import { IteratePaginatedGridComponent } from '../../../components/iterate-paginated-grid/iterate-paginated-grid.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [AgendaPage, FooterAyudaHomeComponent, IteratePaginatedGridComponent]
})
export class AgendaPageModule {}
