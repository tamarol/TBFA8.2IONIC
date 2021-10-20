import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MvientoPage } from './mviento.page';

const routes: Routes = [
  {
    path: '',
    component: MvientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvientoPageRoutingModule {}
