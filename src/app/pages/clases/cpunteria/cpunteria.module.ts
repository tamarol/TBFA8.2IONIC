import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpunteriaPageRoutingModule } from './cpunteria-routing.module';

import { CpunteriaPage } from './cpunteria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpunteriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CpunteriaPage]
})
export class CpunteriaPageModule {}
