import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimerPlatoPageRoutingModule } from './primer-plato-routing.module';

import { PrimerPlatoPage } from './primer-plato.page';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimerPlatoPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PrimerPlatoPage]
})
export class PrimerPlatoPageModule {}
