import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdestruccionPageRoutingModule } from './bdestruccion-routing.module';

import { BdestruccionPage } from './bdestruccion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdestruccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BdestruccionPage]
})
export class BdestruccionPageModule {}
