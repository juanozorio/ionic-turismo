import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedioParaibaPageRoutingModule } from './medio-paraiba-routing.module';

import { MedioParaibaPage } from './medio-paraiba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedioParaibaPageRoutingModule
  ],
  declarations: [MedioParaibaPage]
})
export class MedioParaibaPageModule {}
