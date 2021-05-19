import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosulFluPageRoutingModule } from './centrosul-flu-routing.module';

import { CentrosulFluPage } from './centrosul-flu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosulFluPageRoutingModule
  ],
  declarations: [CentrosulFluPage]
})
export class CentrosulFluPageModule {}
