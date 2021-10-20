import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DksangrePage } from './dksangre.page';

const routes: Routes = [
  {
    path: '',
    component: DksangrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DksangrePageRoutingModule {}
