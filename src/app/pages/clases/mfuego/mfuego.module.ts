import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MfuegoPageRoutingModule } from './mfuego-routing.module';

import { MfuegoPage } from './mfuego.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfuegoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MfuegoPage]
})
export class MfuegoPageModule {}
