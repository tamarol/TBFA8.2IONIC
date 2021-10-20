import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PforajidoPage } from './pforajido.page';

const routes: Routes = [
  {
    path: '',
    component: PforajidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PforajidoPageRoutingModule {}
