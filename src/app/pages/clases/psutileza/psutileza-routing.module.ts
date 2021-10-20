import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsutilezaPage } from './psutileza.page';

const routes: Routes = [
  {
    path: '',
    component: PsutilezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsutilezaPageRoutingModule {}
