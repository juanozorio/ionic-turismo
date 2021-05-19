import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaixadaLitPageRoutingModule } from './baixada-lit-routing.module';

import { BaixadaLitPage } from './baixada-lit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaixadaLitPageRoutingModule
  ],
  declarations: [BaixadaLitPage]
})
export class BaixadaLitPageModule {}
