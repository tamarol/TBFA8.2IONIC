import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsupervivenciaPageRoutingModule } from './csupervivencia-routing.module';

import { CsupervivenciaPage } from './csupervivencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsupervivenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CsupervivenciaPage]
})
export class CsupervivenciaPageModule {}
