import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComisionesTablaComponent } from './components/comisiones-tabla/comisiones-tabla.component';
import { ComisionesBuscarComponent } from './components/comisiones-buscar/comisiones-buscar.component';



@NgModule({
  declarations: [
    ComisionesTablaComponent,
    ComisionesBuscarComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ComisionesBuscarComponent,
    ComisionesTablaComponent
  ]
})
export class ComisionesModule { }
