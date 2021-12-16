import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerComandasPageRoutingModule } from './ver-comandas-routing.module';

import { VerComandasPage } from './ver-comandas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerComandasPageRoutingModule
  ],
  declarations: [VerComandasPage]
})
export class VerComandasPageModule {}
