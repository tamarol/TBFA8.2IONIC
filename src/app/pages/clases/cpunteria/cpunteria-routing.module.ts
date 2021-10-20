import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpunteriaPage } from './cpunteria.page';

const routes: Routes = [
  {
    path: '',
    component: CpunteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpunteriaPageRoutingModule {}
