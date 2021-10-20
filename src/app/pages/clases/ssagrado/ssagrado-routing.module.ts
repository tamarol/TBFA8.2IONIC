import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsagradoPage } from './ssagrado.page';

const routes: Routes = [
  {
    path: '',
    component: SsagradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsagradoPageRoutingModule {}
