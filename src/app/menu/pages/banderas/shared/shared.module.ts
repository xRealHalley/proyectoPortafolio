import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LoadingSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
