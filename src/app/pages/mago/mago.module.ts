import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagoPageRoutingModule } from './mago-routing.module';

import { MagoPage } from './mago.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MagoPage]
})
export class MagoPageModule {}
