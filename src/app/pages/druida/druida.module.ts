import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DruidaPageRoutingModule } from './druida-routing.module';

import { DruidaPage } from './druida.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DruidaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DruidaPage]
})
export class DruidaPageModule {}
