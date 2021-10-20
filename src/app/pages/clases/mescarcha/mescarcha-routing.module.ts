import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MescarchaPage } from './mescarcha.page';

const routes: Routes = [
  {
    path: '',
    component: MescarchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MescarchaPageRoutingModule {}
