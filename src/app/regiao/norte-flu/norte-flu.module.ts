import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorteFluPageRoutingModule } from './norte-flu-routing.module';

import { NorteFluPage } from './norte-flu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorteFluPageRoutingModule
  ],
  declarations: [NorteFluPage]
})
export class NorteFluPageModule {}
