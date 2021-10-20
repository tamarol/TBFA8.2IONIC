import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdestruccionPage } from './bdestruccion.page';

const routes: Routes = [
  {
    path: '',
    component: BdestruccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BdestruccionPageRoutingModule {}
