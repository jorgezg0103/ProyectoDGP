import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoPlatoPageRoutingModule } from './segundo-plato-routing.module';

import { SegundoPlatoPage } from './segundo-plato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoPlatoPageRoutingModule
  ],
  declarations: [SegundoPlatoPage]
})
export class SegundoPlatoPageModule {}
