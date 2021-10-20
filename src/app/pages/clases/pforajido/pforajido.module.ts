import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PforajidoPageRoutingModule } from './pforajido-routing.module';

import { PforajidoPage } from './pforajido.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PforajidoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PforajidoPage]
})
export class PforajidoPageModule {}
