import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhPage } from './dh.page';

const routes: Routes = [
  {
    path: '',
    component: DhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhPageRoutingModule {}
