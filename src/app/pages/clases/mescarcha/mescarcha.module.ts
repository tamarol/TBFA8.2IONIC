import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MescarchaPageRoutingModule } from './mescarcha-routing.module';

import { MescarchaPage } from './mescarcha.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MescarchaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MescarchaPage]
})
export class MescarchaPageModule {}
