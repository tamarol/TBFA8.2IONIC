import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McerveceroPage } from './mcervecero.page';

const routes: Routes = [
  {
    path: '',
    component: McerveceroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McerveceroPageRoutingModule {}
