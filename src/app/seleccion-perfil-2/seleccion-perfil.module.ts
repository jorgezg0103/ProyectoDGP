import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionPerfilPageRoutingModule } from './seleccion-perfil-routing.module';

import { SeleccionPerfilPage } from './seleccion-perfil.page';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionPerfilPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [SeleccionPerfilPage]
})
export class SeleccionPerfilPageModule {
}
