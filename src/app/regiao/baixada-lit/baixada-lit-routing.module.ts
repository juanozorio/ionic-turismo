import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaixadaLitPage } from './baixada-lit.page';

const routes: Routes = [
  {
    path: '',
    component: BaixadaLitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaixadaLitPageRoutingModule {}
