import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTurismoPageRoutingModule } from './menu-turismo-routing.module';

import { MenuTurismoPage } from './menu-turismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTurismoPageRoutingModule
  ],
  declarations: [MenuTurismoPage]
})
export class MenuTurismoPageModule {}
