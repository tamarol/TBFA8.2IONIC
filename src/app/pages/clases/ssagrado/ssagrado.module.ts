import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsagradoPageRoutingModule } from './ssagrado-routing.module';

import { SsagradoPage } from './ssagrado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsagradoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SsagradoPage]
})
export class SsagradoPageModule {}
