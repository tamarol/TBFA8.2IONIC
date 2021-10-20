import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhvenganzaPageRoutingModule } from './dhvenganza-routing.module';

import { DhvenganzaPage } from './dhvenganza.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhvenganzaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DhvenganzaPage]
})
export class DhvenganzaPageModule {}
