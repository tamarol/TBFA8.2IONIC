import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhvenganzaPage } from './dhvenganza.page';

const routes: Routes = [
  {
    path: '',
    component: DhvenganzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhvenganzaPageRoutingModule {}
