import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComandaPage } from './comanda.page';

const routes: Routes = [
  {
    path: '',
    component: ComandaPage
  },
  {
    path: 'aniadir-comanda',
    loadChildren: () => import('./aniadir-comanda/aniadir-comanda.module').then( m => m.AniadirComandaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComandaPageRoutingModule {}
