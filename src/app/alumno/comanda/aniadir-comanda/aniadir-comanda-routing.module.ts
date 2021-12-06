import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirComandaPage } from './aniadir-comanda.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirComandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirComandaPageRoutingModule {}
