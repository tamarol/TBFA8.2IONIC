import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsutilezaPageRoutingModule } from './psutileza-routing.module';

import { PsutilezaPage } from './psutileza.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsutilezaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PsutilezaPage]
})
export class PsutilezaPageModule {}
