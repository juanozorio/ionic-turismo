import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostaverdePageRoutingModule } from './costaverde-routing.module';

import { CostaverdePage } from './costaverde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostaverdePageRoutingModule
  ],
  declarations: [CostaverdePage]
})
export class CostaverdePageModule {}
