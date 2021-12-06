import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerPlatoPage } from './primer-plato.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerPlatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimerPlatoPageRoutingModule {}
