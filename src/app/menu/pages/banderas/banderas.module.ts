import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BanderasComponent } from './banderas.component';
import { CountriesRoutingModule } from './banderas/countries-routing.module';
import { CountriesModule } from './banderas/countries.module';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    BanderasComponent
  ],
  imports: [
    CommonModule,
    CountriesModule,
    CountriesRoutingModule,
    HttpClientModule,
    SharedModule,
    MaterialModule
  ]
})
export class BanderasModule { }
