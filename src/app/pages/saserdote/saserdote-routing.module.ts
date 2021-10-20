import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaserdotePage } from './saserdote.page';

const routes: Routes = [
  {
    path: '',
    component: SaserdotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaserdotePageRoutingModule {}
