import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./banderas/countries.module').then(m => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class BanderasRoutingModule { }
