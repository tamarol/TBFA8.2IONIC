import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsombraPage } from './ssombra.page';

const routes: Routes = [
  {
    path: '',
    component: SsombraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsombraPageRoutingModule {}
