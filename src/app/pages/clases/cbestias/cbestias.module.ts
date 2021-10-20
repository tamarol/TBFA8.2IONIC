import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbestiasPageRoutingModule } from './cbestias-routing.module';

import { CbestiasPage } from './cbestias.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbestiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CbestiasPage]
})
export class CbestiasPageModule {}
