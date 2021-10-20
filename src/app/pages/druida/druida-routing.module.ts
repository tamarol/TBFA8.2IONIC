import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DruidaPage } from './druida.page';

const routes: Routes = [
  {
    path: '',
    component: DruidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DruidaPageRoutingModule {}
