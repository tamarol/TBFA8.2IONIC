import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbestiasPage } from './cbestias.page';

const routes: Routes = [
  {
    path: '',
    component: CbestiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbestiasPageRoutingModule {}
