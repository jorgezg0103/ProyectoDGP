import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoPlatoPage } from './segundo-plato.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoPlatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundoPlatoPageRoutingModule {}
