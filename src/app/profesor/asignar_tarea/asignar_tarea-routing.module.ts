//Nombre de archivo:asignar_tarea-routing.module.ts
//Fichero encargado de ayudar al fichero de routing principal de la aplicación
//Autor: Jesús López Rodríguez
//Define una variable para la ruta de la página y un módulo importando y exportando las rutas utilizadas

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignar_tareaPage } from './asignar_tarea.page';

const routes: Routes = [
  {
    path: '',
    component: Asignar_tareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignar_tareaPageRoutingModule {}
