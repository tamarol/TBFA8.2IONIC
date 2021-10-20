import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdisiplinaPage } from './sdisiplina.page';

const routes: Routes = [
  {
    path: '',
    component: SdisiplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SdisiplinaPageRoutingModule {}
