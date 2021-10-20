import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DequilibrioPageRoutingModule } from './dequilibrio-routing.module';

import { DequilibrioPage } from './dequilibrio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DequilibrioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DequilibrioPage]
})
export class DequilibrioPageModule {}
