import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrujoPage } from './brujo.page';

const routes: Routes = [
  {
    path: '',
    component: BrujoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrujoPageRoutingModule {}
