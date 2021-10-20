import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrujoPageRoutingModule } from './brujo-routing.module';

import { BrujoPage } from './brujo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrujoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BrujoPage]
})
export class BrujoPageModule {}
