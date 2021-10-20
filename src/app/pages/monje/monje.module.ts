import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonjePageRoutingModule } from './monje-routing.module';

import { MonjePage } from './monje.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonjePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MonjePage]
})
export class MonjePageModule {}
