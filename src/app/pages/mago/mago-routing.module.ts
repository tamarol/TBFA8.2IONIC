import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagoPage } from './mago.page';

const routes: Routes = [
  {
    path: '',
    component: MagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagoPageRoutingModule {}
