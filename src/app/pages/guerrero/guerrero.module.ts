import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuerreroPageRoutingModule } from './guerrero-routing.module';

import { GuerreroPage } from './guerrero.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuerreroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GuerreroPage]
})
export class GuerreroPageModule {}
