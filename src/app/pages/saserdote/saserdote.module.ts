import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaserdotePageRoutingModule } from './saserdote-routing.module';

import { SaserdotePage } from './saserdote.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaserdotePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SaserdotePage]
})
export class SaserdotePageModule {}
