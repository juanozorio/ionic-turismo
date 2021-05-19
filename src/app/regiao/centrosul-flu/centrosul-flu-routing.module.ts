import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosulFluPage } from './centrosul-flu.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosulFluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosulFluPageRoutingModule {}
