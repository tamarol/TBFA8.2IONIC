import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DkPageRoutingModule } from './dk-routing.module';

import { DkPage } from './dk.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DkPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DkPage]
})
export class DkPageModule {}
