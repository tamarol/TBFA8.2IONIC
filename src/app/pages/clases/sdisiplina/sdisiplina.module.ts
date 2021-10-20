import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdisiplinaPageRoutingModule } from './sdisiplina-routing.module';

import { SdisiplinaPage } from './sdisiplina.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdisiplinaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SdisiplinaPage]
})
export class SdisiplinaPageModule {}
