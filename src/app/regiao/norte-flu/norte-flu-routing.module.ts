import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorteFluPage } from './norte-flu.page';

const routes: Routes = [
  {
    path: '',
    component: NorteFluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorteFluPageRoutingModule {}
