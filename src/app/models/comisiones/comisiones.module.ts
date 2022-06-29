import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComisionComponent } from './pages/crear-comision/crear-comision.component';
import { VerComisionComponent } from './pages/ver-comision/ver-comision.component';
import { ComisionesRoutingModule } from './comisiones.routes';



@NgModule({
  declarations: [
    CrearComisionComponent,
    VerComisionComponent
  ],
  imports: [
    CommonModule,
    ComisionesRoutingModule
  ]
})
export class ComisionesModule { }
