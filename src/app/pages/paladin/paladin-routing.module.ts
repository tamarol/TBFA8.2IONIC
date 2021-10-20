import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaladinPage } from './paladin.page';

const routes: Routes = [
  {
    path: '',
    component: PaladinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaladinPageRoutingModule {}
