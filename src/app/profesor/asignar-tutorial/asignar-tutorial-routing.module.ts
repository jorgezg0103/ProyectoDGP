import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarTutorialPage } from './asignar-tutorial.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarTutorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarTutorialPageRoutingModule {}
