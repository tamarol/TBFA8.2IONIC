import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TclasesComponent } from './tclases/tclases.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TclasesComponent
  ],
  exports:[
    HeaderComponent,
    TclasesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
