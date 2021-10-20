import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsombraPageRoutingModule } from './ssombra-routing.module';

import { SsombraPage } from './ssombra.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsombraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SsombraPage]
})
export class SsombraPageModule {}
