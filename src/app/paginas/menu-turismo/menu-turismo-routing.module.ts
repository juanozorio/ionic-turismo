import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTurismoPage } from './menu-turismo.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTurismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTurismoPageRoutingModule {}
