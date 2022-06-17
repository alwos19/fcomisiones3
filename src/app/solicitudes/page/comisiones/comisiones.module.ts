import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VercomisionesComponent } from './vercomisiones/vercomisiones.component';
import { CrearComisionComponent } from './crear-comision/crear-comision.component';



@NgModule({
  declarations: [
    VercomisionesComponent,
    CrearComisionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComisionesModule { }
