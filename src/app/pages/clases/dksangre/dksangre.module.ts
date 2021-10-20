import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DksangrePageRoutingModule } from './dksangre-routing.module';

import { DksangrePage } from './dksangre.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DksangrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DksangrePage]
})
export class DksangrePageModule {}
