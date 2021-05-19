import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerranaPage } from './serrana.page';

const routes: Routes = [
  {
    path: '',
    component: SerranaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerranaPageRoutingModule {}
