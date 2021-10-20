import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonjePage } from './monje.page';

const routes: Routes = [
  {
    path: '',
    component: MonjePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonjePageRoutingModule {}
