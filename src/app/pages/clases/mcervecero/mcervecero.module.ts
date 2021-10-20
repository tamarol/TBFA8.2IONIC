import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McerveceroPageRoutingModule } from './mcervecero-routing.module';

import { McerveceroPage } from './mcervecero.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McerveceroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [McerveceroPage]
})
export class McerveceroPageModule {}
