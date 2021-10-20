import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DferalPage } from './dferal.page';

const routes: Routes = [
  {
    path: '',
    component: DferalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DferalPageRoutingModule {}
