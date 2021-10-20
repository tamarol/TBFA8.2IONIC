import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsagradoPage } from './psagrado.page';

const routes: Routes = [
  {
    path: '',
    component: PsagradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsagradoPageRoutingModule {}
