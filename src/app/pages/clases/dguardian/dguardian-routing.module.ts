import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DguardianPage } from './dguardian.page';

const routes: Routes = [
  {
    path: '',
    component: DguardianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DguardianPageRoutingModule {}
