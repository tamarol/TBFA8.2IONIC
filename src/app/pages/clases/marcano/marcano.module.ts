import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcanoPageRoutingModule } from './marcano-routing.module';

import { MarcanoPage } from './marcano.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcanoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MarcanoPage]
})
export class MarcanoPageModule {}
