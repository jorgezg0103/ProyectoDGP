//Nombre de archivo:alumno-routing.module.ts
//Fichero encargado de ayudar al fichero de routing principal de la aplicación
//Autor: Jose Melguizo Ruano
//Define una variable para la ruta de la página y un módulo importando y exportando las rutas utilizadas

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoPage } from './alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoPageRoutingModule {}
