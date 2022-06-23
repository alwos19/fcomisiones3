import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEvalucionPropuestaComponent } from './f-evalucion-propuesta/f-evalucion-propuesta.component';
import { DexclusivaRoutingModule } from './dexclusiva.routes';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FEvalucionPropuestaComponent
  ],
  imports: [
    DexclusivaRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
})
export class DexclusivaModule { }
