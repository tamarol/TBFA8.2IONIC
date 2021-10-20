import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhdevastacionPage } from './dhdevastacion.page';

const routes: Routes = [
  {
    path: '',
    component: DhdevastacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhdevastacionPageRoutingModule {}
