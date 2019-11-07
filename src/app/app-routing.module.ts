import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'uno/:numero', loadChildren: './uno/uno.module#UnoPageModule' },
  { path: 'dos', loadChildren: './dos/dos.module#DosPageModule' },
  { path: 'tres', loadChildren: './tres/tres.module#TresPageModule' },
  { path: 'cuatro', loadChildren: './cuatro/cuatro.module#CuatroPageModule' },
  { path: 'cinco', loadChildren: './cinco/cinco.module#CincoPageModule' },
  { path: 'a-millas/:numero', loadChildren: './a-millas/a-millas.module#AMillasPageModule' },
  { path: 'a-kilometros/:numero', loadChildren: './a-kilometros/a-kilometros.module#AKilometrosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
