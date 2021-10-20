import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelementalPage } from './celemental.page';

const routes: Routes = [
  {
    path: '',
    component: CelementalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelementalPageRoutingModule {}
