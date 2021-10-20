import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CazadorPage } from './cazador.page';

const routes: Routes = [
  {
    path: '',
    component: CazadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CazadorPageRoutingModule {}
