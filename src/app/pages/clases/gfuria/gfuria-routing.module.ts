import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GfuriaPage } from './gfuria.page';

const routes: Routes = [
  {
    path: '',
    component: GfuriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GfuriaPageRoutingModule {}
