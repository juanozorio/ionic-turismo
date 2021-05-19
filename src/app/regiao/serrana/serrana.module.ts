import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerranaPageRoutingModule } from './serrana-routing.module';

import { SerranaPage } from './serrana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerranaPageRoutingModule
  ],
  declarations: [SerranaPage]
})
export class SerranaPageModule {}
