import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirComandaPage } from './aniadir-comanda.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirComandaPage
  },
  {
    path: 'primer-plato',
    loadChildren: () => import('../aniadirComanda/primer-plato/primer-plato.module').then( m => m.PrimerPlatoPageModule)
  },
  {
    path: 'segundo-plato',
    loadChildren: () => import('../aniadirComanda/segundo-plato/segundo-plato.module').then( m => m.SegundoPlatoPageModule)
  },
  {
    path: 'postre',
    loadChildren: () => import('../aniadirComanda/postre/postre.module').then( m => m.PostrePageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('../aniadirComanda/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirComandaPageRoutingModule {}
