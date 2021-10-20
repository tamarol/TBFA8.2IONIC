import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdemonologiaPage } from './bdemonologia.page';

const routes: Routes = [
  {
    path: '',
    component: BdemonologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BdemonologiaPageRoutingModule {}
