import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DkPage } from './dk.page';

const routes: Routes = [
  {
    path: '',
    component: DkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DkPageRoutingModule {}
