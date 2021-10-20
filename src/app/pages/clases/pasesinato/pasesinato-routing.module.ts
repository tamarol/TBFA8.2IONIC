import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasesinatoPage } from './pasesinato.page';

const routes: Routes = [
  {
    path: '',
    component: PasesinatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasesinatoPageRoutingModule {}
