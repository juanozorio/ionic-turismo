import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedioParaibaPage } from './medio-paraiba.page';

const routes: Routes = [
  {
    path: '',
    component: MedioParaibaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedioParaibaPageRoutingModule {}
