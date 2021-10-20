import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CazadorPageRoutingModule } from './cazador-routing.module';

import { CazadorPage } from './cazador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CazadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CazadorPage]
})
export class CazadorPageModule {}
