import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoroesteFluPage } from './noroeste-flu.page';

const routes: Routes = [
  {
    path: '',
    component: NoroesteFluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoroesteFluPageRoutingModule {}
