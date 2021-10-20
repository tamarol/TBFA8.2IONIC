import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GproteccionPage } from './gproteccion.page';

const routes: Routes = [
  {
    path: '',
    component: GproteccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GproteccionPageRoutingModule {}
