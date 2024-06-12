import { NgModule } from '@angular/core';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Error404PageComponent,
  ],
  exports: [
    Error404PageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
})
export class SharedModule { }
