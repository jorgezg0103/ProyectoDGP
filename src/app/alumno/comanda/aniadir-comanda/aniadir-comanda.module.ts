import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniadirComandaPageRoutingModule } from './aniadir-comanda-routing.module';

import { AniadirComandaPage } from './aniadir-comanda.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniadirComandaPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [AniadirComandaPage]
})
export class AniadirComandaPageModule {}
