import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MnieblaPageRoutingModule } from './mniebla-routing.module';

import { MnieblaPage } from './mniebla.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MnieblaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MnieblaPage]
})
export class MnieblaPageModule {}
