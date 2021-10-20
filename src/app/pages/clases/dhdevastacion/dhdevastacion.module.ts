import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhdevastacionPageRoutingModule } from './dhdevastacion-routing.module';

import { DhdevastacionPage } from './dhdevastacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhdevastacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DhdevastacionPage]
})
export class DhdevastacionPageModule {}
