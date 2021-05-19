import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoroesteFluPageRoutingModule } from './noroeste-flu-routing.module';

import { NoroesteFluPage } from './noroeste-flu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoroesteFluPageRoutingModule
  ],
  declarations: [NoroesteFluPage]
})
export class NoroesteFluPageModule {}
