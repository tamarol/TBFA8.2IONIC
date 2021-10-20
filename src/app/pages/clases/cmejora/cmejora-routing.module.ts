import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmejoraPage } from './cmejora.page';

const routes: Routes = [
  {
    path: '',
    component: CmejoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmejoraPageRoutingModule {}
