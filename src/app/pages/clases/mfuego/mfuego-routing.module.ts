import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MfuegoPage } from './mfuego.page';

const routes: Routes = [
  {
    path: '',
    component: MfuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfuegoPageRoutingModule {}
