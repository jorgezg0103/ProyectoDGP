//Nombre de archivo:tutoriales-routing.module.ts
//Fichero encargado de ayudar al fichero de routing principal de la aplicación
//Autor: Jesús López Rodríguez
//Define una variable para la ruta de la página y un módulo importando y exportando las rutas utilizadas

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialesPage } from './tutoriales.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialesPageRoutingModule {}
