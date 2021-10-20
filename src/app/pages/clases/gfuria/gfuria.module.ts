import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GfuriaPageRoutingModule } from './gfuria-routing.module';

import { GfuriaPage } from './gfuria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GfuriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GfuriaPage]
})
export class GfuriaPageModule {}
