import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from './menu-routing.module';

import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { WeatherComponent } from './pages/weather/weather.component';
// import { BanderasModule } from './pages/banderas/banderas.module';
import { HistorialComponent } from './pages/calculadora/historial/historial.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    CalculadoraComponent,
    HistorialComponent,
    InicioPageComponent,
    LayoutPageComponent,
    ListaTareasComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MenuRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class MenuModule { }
