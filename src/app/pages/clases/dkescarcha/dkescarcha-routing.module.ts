import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DkescarchaPage } from './dkescarcha.page';

const routes: Routes = [
  {
    path: '',
    component: DkescarchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DkescarchaPageRoutingModule {}
