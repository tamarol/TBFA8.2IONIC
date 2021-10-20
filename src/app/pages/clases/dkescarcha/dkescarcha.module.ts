import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DkescarchaPageRoutingModule } from './dkescarcha-routing.module';

import { DkescarchaPage } from './dkescarcha.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DkescarchaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DkescarchaPage]
})
export class DkescarchaPageModule {}
