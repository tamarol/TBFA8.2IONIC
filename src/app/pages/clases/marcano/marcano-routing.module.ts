import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcanoPage } from './marcano.page';

const routes: Routes = [
  {
    path: '',
    component: MarcanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcanoPageRoutingModule {}
