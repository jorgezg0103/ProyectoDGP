import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerComandasPage } from './ver-comandas.page';

const routes: Routes = [
  {
    path: '',
    component: VerComandasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerComandasPageRoutingModule {}
