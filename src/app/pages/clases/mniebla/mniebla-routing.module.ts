import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MnieblaPage } from './mniebla.page';

const routes: Routes = [
  {
    path: '',
    component: MnieblaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MnieblaPageRoutingModule {}
