import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DequilibrioPage } from './dequilibrio.page';

const routes: Routes = [
  {
    path: '',
    component: DequilibrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DequilibrioPageRoutingModule {}
