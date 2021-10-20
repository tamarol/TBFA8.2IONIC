import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamanPage } from './chaman.page';

const routes: Routes = [
  {
    path: '',
    component: ChamanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamanPageRoutingModule {}
