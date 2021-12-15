import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarTutorialPageRoutingModule } from './asignar-tutorial-routing.module';

import { AsignarTutorialPage } from './asignar-tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarTutorialPageRoutingModule
  ],
  declarations: [AsignarTutorialPage]
})
export class AsignarTutorialPageModule {}
