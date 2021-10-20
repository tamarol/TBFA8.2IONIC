import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsupervivenciaPage } from './csupervivencia.page';

const routes: Routes = [
  {
    path: '',
    component: CsupervivenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsupervivenciaPageRoutingModule {}
