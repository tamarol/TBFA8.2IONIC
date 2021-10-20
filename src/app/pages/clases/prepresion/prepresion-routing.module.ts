import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepresionPage } from './prepresion.page';

const routes: Routes = [
  {
    path: '',
    component: PrepresionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepresionPageRoutingModule {}
