import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaRoutingModule } from './grafica-routing.module';
import { GraficaComponent } from './grafica.component';


@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    CommonModule,
    GraficaRoutingModule
  ]
})
export class GraficaModule { }
