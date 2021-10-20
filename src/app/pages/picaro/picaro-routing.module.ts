import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicaroPage } from './picaro.page';

const routes: Routes = [
  {
    path: '',
    component: PicaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicaroPageRoutingModule {}
