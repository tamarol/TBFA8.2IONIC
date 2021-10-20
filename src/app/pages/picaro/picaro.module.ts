import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicaroPageRoutingModule } from './picaro-routing.module';

import { PicaroPage } from './picaro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicaroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PicaroPage]
})
export class PicaroPageModule {}
