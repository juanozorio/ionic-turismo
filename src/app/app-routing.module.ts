import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./paginas/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'menu-turismo',
    loadChildren: () => import('./paginas/menu-turismo/menu-turismo.module').then( m => m.MenuTurismoPageModule)
  },
  {
    path: 'noroeste-flu',
    loadChildren: () => import('./regiao/noroeste-flu/noroeste-flu.module').then( m => m.NoroesteFluPageModule)
  },
  {
    path: 'norte-flu',
    loadChildren: () => import('./regiao/norte-flu/norte-flu.module').then( m => m.NorteFluPageModule)
  },
  {
    path: 'serrana',
    loadChildren: () => import('./regiao/serrana/serrana.module').then( m => m.SerranaPageModule)
  },
  {
    path: 'baixada-lit',
    loadChildren: () => import('./regiao/baixada-lit/baixada-lit.module').then( m => m.BaixadaLitPageModule)
  },
  {
    path: 'medio-paraiba',
    loadChildren: () => import('./regiao/medio-paraiba/medio-paraiba.module').then( m => m.MedioParaibaPageModule)
  },
  {
    path: 'centrosul-flu',
    loadChildren: () => import('./regiao/centrosul-flu/centrosul-flu.module').then( m => m.CentrosulFluPageModule)
  },
  {
    path: 'costaverde',
    loadChildren: () => import('./regiao/costaverde/costaverde.module').then( m => m.CostaverdePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
