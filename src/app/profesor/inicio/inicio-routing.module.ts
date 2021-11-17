//Nombre de archivo:inicio-routing.module.ts
//Fichero encargado de ayudar al fichero de routing principal de la aplicación
//Autor: Alejandro Soriano Morante
//Define una variable para la ruta de la página y un módulo importando y exportando las rutas utilizadas

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
