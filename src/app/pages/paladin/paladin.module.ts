import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaladinPageRoutingModule } from './paladin-routing.module';

import { PaladinPage } from './paladin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaladinPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaladinPage]
})
export class PaladinPageModule {}
