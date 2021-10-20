import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmejoraPageRoutingModule } from './cmejora-routing.module';

import { CmejoraPage } from './cmejora.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmejoraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CmejoraPage]
})
export class CmejoraPageModule {}
