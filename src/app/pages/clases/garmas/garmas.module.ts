import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarmasPageRoutingModule } from './garmas-routing.module';

import { GarmasPage } from './garmas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarmasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GarmasPage]
})
export class GarmasPageModule {}
