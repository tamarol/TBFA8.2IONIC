import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelementalPageRoutingModule } from './celemental-routing.module';

import { CelementalPage } from './celemental.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelementalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CelementalPage]
})
export class CelementalPageModule {}
