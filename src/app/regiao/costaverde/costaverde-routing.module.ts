import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostaverdePage } from './costaverde.page';

const routes: Routes = [
  {
    path: '',
    component: CostaverdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostaverdePageRoutingModule {}
