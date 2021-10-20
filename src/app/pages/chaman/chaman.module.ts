import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamanPageRoutingModule } from './chaman-routing.module';

import { ChamanPage } from './chaman.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamanPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChamanPage]
})
export class ChamanPageModule {}
