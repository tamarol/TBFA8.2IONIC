import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepresionPageRoutingModule } from './prepresion-routing.module';

import { PrepresionPage } from './prepresion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepresionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrepresionPage]
})
export class PrepresionPageModule {}
