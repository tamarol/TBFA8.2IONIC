import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DkprofanoPageRoutingModule } from './dkprofano-routing.module';

import { DkprofanoPage } from './dkprofano.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DkprofanoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DkprofanoPage]
})
export class DkprofanoPageModule {}
