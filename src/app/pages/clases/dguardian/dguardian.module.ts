import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DguardianPageRoutingModule } from './dguardian-routing.module';

import { DguardianPage } from './dguardian.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DguardianPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DguardianPage]
})
export class DguardianPageModule {}
