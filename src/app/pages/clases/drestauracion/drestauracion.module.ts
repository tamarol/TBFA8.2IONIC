import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrestauracionPageRoutingModule } from './drestauracion-routing.module';

import { DrestauracionPage } from './drestauracion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrestauracionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DrestauracionPage]
})
export class DrestauracionPageModule {}
