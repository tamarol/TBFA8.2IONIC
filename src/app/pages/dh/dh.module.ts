import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhPageRoutingModule } from './dh-routing.module';

import { DhPage } from './dh.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DhPage]
})
export class DhPageModule {}
