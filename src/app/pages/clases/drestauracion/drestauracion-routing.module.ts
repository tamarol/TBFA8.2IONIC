import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrestauracionPage } from './drestauracion.page';

const routes: Routes = [
  {
    path: '',
    component: DrestauracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrestauracionPageRoutingModule {}
